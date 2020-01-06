package com.pwr.eGOT.trackPlanning.model;

import java.util.UUID;

public class Mountain {
    private final UUID id;
    private final String name;

    public Mountain(UUID id, String name) {
        this.id = id;
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
