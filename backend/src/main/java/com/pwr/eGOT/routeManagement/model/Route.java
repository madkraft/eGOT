package com.pwr.eGOT.routeManagement.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Route {

    private final UUID id;
    private final UUID regionId;
    private int length;
    private int pointsTo;
    private int pointsFrom;
    private int climbTo;
    private int climbFrom;
    private String startPoint;
    private String finishPoint;


    public Route(@JsonProperty("id") UUID id,
                 @JsonProperty("regionId") UUID regionId,
                 @JsonProperty("length") int length,
                 @JsonProperty("climbTo") int climbTo,
                 @JsonProperty("climbFrom") int climbFrom,
                 @JsonProperty("startPoint") String startPoint,
                 @JsonProperty("finishPoint") String finishPoint) {
        this.id = id;
        this.regionId = regionId;
        this.length = length;
        this.climbTo = climbTo;
        this.climbFrom = climbFrom;
        this.startPoint = startPoint;
        this.finishPoint = finishPoint;
        calculatePoints();
    }


    public void calculatePoints(){
        pointsFrom = 10;
        pointsTo = 15;
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

    public int getPointsTo() {
        return pointsTo;
    }

    public void setPointsTo(int pointsTo) {
        this.pointsTo = pointsTo;
    }

    public int getPointsFrom() {
        return pointsFrom;
    }

    public void setPointsFrom(int pointsFrom) {
        this.pointsFrom = pointsFrom;
    }

    public int getClimbTo() {
        return climbTo;
    }

    public void setClimbTo(int climbTo) {
        this.climbTo = climbTo;
    }

    public int getClimbFrom() {
        return climbFrom;
    }

    public void setClimbFrom(int climbFrom) {
        this.climbFrom = climbFrom;
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

    @Override
    public String toString() {
        return "Route{" +
                "id=" + id +
                ", regionId=" + regionId +
                ", length=" + length +
                ", pointsTo=" + pointsTo +
                ", pointsFrom=" + pointsFrom +
                ", climbTo=" + climbTo +
                ", climbFrom=" + climbFrom +
                ", startPoint='" + startPoint + '\'' +
                ", finishPoint='" + finishPoint + '\'' +
                '}';
    }
}
