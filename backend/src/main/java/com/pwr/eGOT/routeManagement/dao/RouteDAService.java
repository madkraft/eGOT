package com.pwr.eGOT.routeManagement.dao;

import com.pwr.eGOT.routeManagement.model.Route;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

//@Repository("postgres")
public class RouteDAService implements RouteDao {
    @Override
    public Optional<Route> selectRouteById(UUID id) {
        return Optional.empty();
    }

    @Override
    public List<Route> selectRoutesByName(String name) {
        return null;
    }

    @Override
    public List<Route> selectAllRoutes() {
        return List.of(new Route(UUID.randomUUID(), UUID.randomUUID(), 10, 5, 7, "a", "b"));
    }

    @Override
    public void addRoute(Route route) {

    }

    @Override
    public int deleteRouteById(UUID id) {
        return 0;
    }

    @Override
    public int updateRouteById(UUID id, Route route) {
        return 0;
    }
}
