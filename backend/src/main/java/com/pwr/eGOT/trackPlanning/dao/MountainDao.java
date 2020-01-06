package com.pwr.eGOT.trackPlanning.dao;

import com.pwr.eGOT.trackPlanning.model.Mountain;
import com.pwr.eGOT.trackPlanning.model.Region;
import com.pwr.eGOT.routeManagement.model.Route;

import java.util.List;
import java.util.UUID;

public interface MountainDao {

    List<Mountain> selectAllMountains();
    List<Region> selectRegionsByMountainId(UUID id);
    List<Route> selectRoutesByRegionId(UUID id);
}
