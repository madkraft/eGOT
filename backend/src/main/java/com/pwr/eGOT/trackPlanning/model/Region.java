package com.pwr.eGOT.trackPlanning.model;

import java.util.UUID;

public class Region {

    private final UUID id;
    private final String name;
    private final UUID mountainId;

    public Region(UUID id, String name, UUID mountainID) {
        this.id = id;
        this.name = name;
        this.mountainId = mountainID;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public UUID getMountainId() {
        return mountainId;
    }
}
