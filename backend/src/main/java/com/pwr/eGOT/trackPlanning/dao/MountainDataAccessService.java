package com.pwr.eGOT.trackPlanning.dao;

import com.pwr.eGOT.trackPlanning.model.Mountain;
import com.pwr.eGOT.trackPlanning.model.Region;
import com.pwr.eGOT.routeManagement.model.Route;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Repository("mountDao")
public class MountainDataAccessService implements MountainDao {

    private static List<Mountain> mountains = new ArrayList<>();
    private static List<Region> regions = new ArrayList<>();
    private static List<Route> routes = new ArrayList<>();

    public MountainDataAccessService() {
        generateData();
    }

    private void generateData() {
        Mountain m1 = new Mountain(UUID.randomUUID(), "Tatry");
        Mountain m2 = new Mountain(UUID.randomUUID(), "Karpaty");
        mountains.add(m1);
        mountains.add(m2);
        mountains.add(new Mountain(UUID.randomUUID(), "Sudety"));
        regions.add(new Region(UUID.randomUUID(), "Tatry Zachodnie", m1.getId()));
        regions.add(new Region(UUID.randomUUID(), "Tatry Wysokie", m1.getId()));
        regions.add(new Region(UUID.randomUUID(), "KarpatyRegion1", m2.getId()));
    }


    @Override
    public List<Mountain> selectAllMountains() {

        return mountains;
    }

    @Override
    public List<Region> selectRegionsByMountainId(UUID id) {
        return regions.stream().filter(region -> region.getMountainId().equals(id)).collect(Collectors.toList());
    }

    @Override
    public List<Route> selectRoutesByRegionId(UUID id) {
        return routes.stream().filter(route -> route.getRegionId().equals(id)).collect(Collectors.toList());
    }
}
