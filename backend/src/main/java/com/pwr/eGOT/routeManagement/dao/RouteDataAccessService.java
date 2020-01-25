package com.pwr.eGOT.routeManagement.dao;

import com.pwr.eGOT.routeManagement.model.Route;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("routeDao")
public class RouteDataAccessService implements RouteDao{

    private static List<Route> routes = new ArrayList<>();

    @Override
    public Optional<Route> selectRouteById(UUID id) {
        return routes.stream().filter(route -> route.getId().equals(id)).findFirst();
    }

    @Override
    public List<Route> selectAllRoutes() {
        return routes;
    }

    @Override
    public List<Route> selectRouteByRegionId(UUID id) {
        return null;
    }


    @Override
    public void addRoute(Route route) {
        routes.add(route);
        System.out.print(routes.get(0).toString());
    }

    @Override
    public int deleteRouteById(UUID id) {
        Optional<Route> routeToDelete = selectRouteById(id);
        if(routeToDelete.toString().isEmpty()){

            return 0;
        }
        routes.remove(routeToDelete.get());
        return 1;
    }

    @Override
    public int updateRouteById(UUID id, Route update) {
        return selectRouteById(id)
                .map(route -> {
                    int indexOfRouteToUpdate = routes.indexOf(route);
                    if(indexOfRouteToUpdate >=0){
                        routes.set(indexOfRouteToUpdate, new Route(id, update.getRegionId(), update.getLength(), update.getClimbPK(), update.getClimbKP(), update.getStartPoint(), update.getFinishPoint(), update.getPointsPK(), update.getPointsKP(),update.getDescription()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }

}
