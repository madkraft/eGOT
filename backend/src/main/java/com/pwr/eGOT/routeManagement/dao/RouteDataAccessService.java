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
    public List<Route> selectRoutesByName(String name) {
        return null;
    }

    @Override
    public List<Route> selectAllRoutes() {
        return routes;
    }


    @Override
    public void addRoute(Route route) {
        routes.add(route);
        System.out.print(routes.get(0).toString());
    }

    @Override
    public void deleteRouteById(UUID id) {

    }

    @Override
    public void updateRouteById(UUID id, Route route) {

    }

}
