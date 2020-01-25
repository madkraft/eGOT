package com.pwr.eGOT.trackPlanning.service;

import com.pwr.eGOT.trackPlanning.dao.MountainDao;
import com.pwr.eGOT.trackPlanning.model.Mountain;
import com.pwr.eGOT.trackPlanning.model.Region;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
public class MountainService {

    private final MountainDao mountainDao;

    @Autowired
    public MountainService(@Qualifier("mountainPostgres") MountainDao mountainDao) {
        this.mountainDao = mountainDao;
    }

    public List<Mountain> getAllMountains(){
        return mountainDao.selectAllMountains();
    }

    public List<Region> getRegionsByMountainId(UUID id){
        return mountainDao.selectRegionsByMountainId(id);
    }

    public List<Region> getAllRegions(){
        return mountainDao.selectAllRegions();
    }



}
