package com.pwr.eGOT.routeManagement.dao;

import com.pwr.eGOT.routeManagement.model.Route;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface RouteDao {


    Optional<Route> selectRouteById(UUID id);
    List<Route> selectRoutesByName(String name);
    List<Route> selectAllRoutes();
    void addRoute(Route route);
    void deleteRouteById(UUID id);
    void updateRouteById(UUID id, Route route);
}
