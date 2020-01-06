package com.pwr.eGOT.trackPlanning.api;

import com.pwr.eGOT.trackPlanning.model.Mountain;
import com.pwr.eGOT.trackPlanning.model.Region;
import com.pwr.eGOT.trackPlanning.service.MountainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/mountains")
@RestController
public class MountainController {

    private final MountainService mountainService;

    @Autowired
    public MountainController(MountainService mountainService) {
        this.mountainService = mountainService;
    }

    @GetMapping
    public List<Mountain> getAllMountains(){
        return mountainService.getAllMountains();
    }

    @GetMapping("/{id}")
    public List<Region> getRegionsByMountainId(@PathVariable String id){
        return mountainService.getRegionsByMountainId(UUID.fromString(id));
    }
}
