package com.pwr.eGOT.routeManagement.api;


import com.pwr.eGOT.routeManagement.model.Route;
import com.pwr.eGOT.routeManagement.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;


@RequestMapping("api/routes")
@RestController
public class RouteController {

    private final RouteService routeService;

    @Autowired
    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @PostMapping
    public void addRoute(@Valid @NonNull @RequestBody Route route){ routeService.addRoute(route);}

    @GetMapping
    public List<Route> getAllRoutes() { return routeService.getAllRoutes(); }

    @GetMapping("/{id}")
    public Route getRouteById(@PathVariable("id") UUID id){
        return routeService.getRouteById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteRouteById(@PathVariable("id") UUID id) {routeService.deleteRoute(id);}

    @PutMapping("/{id}")
    public void updateRoute(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Route routeToUpdate) {routeService.updateRoute(id,routeToUpdate);}



}
