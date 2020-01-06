package com.pwr.eGOT.trackPlanning.api;

import com.pwr.eGOT.trackPlanning.model.Mountain;
import com.pwr.eGOT.trackPlanning.model.Region;
import com.pwr.eGOT.trackPlanning.service.MountainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

//@CrossOrigin(origins = "http://localhost:3000")
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
