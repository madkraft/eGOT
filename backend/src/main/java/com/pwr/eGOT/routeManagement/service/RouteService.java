package com.pwr.eGOT.routeManagement.service;

import com.pwr.eGOT.routeManagement.dao.RouteDao;
import com.pwr.eGOT.routeManagement.model.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RouteService {

    private final RouteDao routeDao;

    @Autowired
    public RouteService(@Qualifier("routePostgres")RouteDao routeDao){
        this.routeDao = routeDao;
    }

    public void addRoute(Route route){
        routeDao.addRoute(route);
    }

    public List<Route> getAllRoutes(){
        return routeDao.selectAllRoutes();
    }

    public List<Route> getRoutesByRegionId(UUID id){
        return routeDao.selectRouteByRegionId(id);
    }

    public Optional<Route> getRouteById(UUID id){
        return routeDao.selectRouteById(id);
    }

    public int deleteRoute(UUID id) {return routeDao.deleteRouteById(id);}

    public int updateRoute(UUID id, Route newRoute) {return routeDao.updateRouteById(id, newRoute);}
}
