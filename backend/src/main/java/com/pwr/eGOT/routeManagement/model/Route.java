package com.pwr.eGOT.routeManagement.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Route {

    private final UUID id;
    private final UUID regionId;
    private int length;
    private int pointsPK;
    private int pointsKP;
    private int climbPK;
    private int climbKP;
    private String startPoint;
    private String finishPoint;
    private String description;


    public Route(@JsonProperty("id") UUID id,
                 @JsonProperty("regionId") UUID regionId,
                 @JsonProperty("length") int length,
                 @JsonProperty("climbPK") int climbPK,
                 @JsonProperty("climbKP") int climbKP,
                 @JsonProperty("startPoint") String startPoint,
                 @JsonProperty("finishPoint") String finishPoint,
                 @JsonProperty("pointsPK") int pointsPK,
                 @JsonProperty("pointsKP") int pointsKP,
                 @JsonProperty("description") String description){
        this.id = id;
        this.regionId = regionId;
        this.length = length;
        this.climbPK = climbPK;
        this.climbKP = climbKP;
        this.startPoint = startPoint;
        this.finishPoint = finishPoint;
        this.pointsPK = pointsPK;
        this.pointsKP = pointsKP;
        this.description = description;

    }


    public void calculatePoints(){
        pointsKP = 10;
        pointsPK = 15;
    }

    public UUID getId() {
        return id;
    }

    public UUID getRegionId() {
        return regionId;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getPointsPK() {
        return pointsPK;
    }

    public void setPointsPK(int pointsPK) {
        this.pointsPK = pointsPK;
    }

    public int getPointsKP() {
        return pointsKP;
    }

    public void setPointsKP(int pointsKP) {
        this.pointsKP = pointsKP;
    }

    public int getClimbPK() {
        return climbPK;
    }

    public void setClimbPK(int climbPK) {
        this.climbPK = climbPK;
    }

    public int getClimbKP() {
        return climbKP;
    }

    public void setClimbKP(int climbKP) {
        this.climbKP = climbKP;
    }

    public String getStartPoint() {
        return startPoint;
    }

    public void setStartPoint(String startPoint) {
        this.startPoint = startPoint;
    }

    public String getFinishPoint() {
        return finishPoint;
    }

    public void setFinishPoint(String finishPoint) {
        this.finishPoint = finishPoint;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Route{" +
                "id=" + id +
                ", regionId=" + regionId +
                ", length=" + length +
                ", pointsPK=" + pointsPK +
                ", pointsKP=" + pointsKP +
                ", climbPK=" + climbPK +
                ", climbKP=" + climbKP +
                ", startPoint='" + startPoint + '\'' +
                ", finishPoint='" + finishPoint + '\'' +
                ", description='" + description +
                '}';
    }
}
