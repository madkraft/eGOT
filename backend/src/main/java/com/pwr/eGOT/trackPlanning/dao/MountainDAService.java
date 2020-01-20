package com.pwr.eGOT.trackPlanning.dao;

import com.pwr.eGOT.routeManagement.model.Route;
import com.pwr.eGOT.trackPlanning.model.Mountain;
import com.pwr.eGOT.trackPlanning.model.Region;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository("mountainPostgres")
public class MountainDAService implements MountainDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public MountainDAService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Mountain> selectAllMountains() {
        String sql = "SELECT id, name FROM mountain";
        List<Mountain> mountains = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            String name = resultSet.getString("name");
            return new Mountain (id, name);
        });
        return mountains;
    }

    @Override
    public List<Region> selectRegionsByMountainId(UUID id) {
        return null;
    }

    @Override
    public List<Route> selectRoutesByRegionId(UUID id) {
        return null;
    }
}
