package com.pwr.eGOT.routeManagement.dao;

import com.pwr.eGOT.routeManagement.model.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("routePostgres")
public class RouteDAService implements RouteDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public RouteDAService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Optional<Route> selectRouteById(UUID routeId) {
        String sql = "SELECT id, region_id, dlugosc, pkt_poczatkowy, pkt_koncowy, punktacja_pk, punktacja_kp, podejscie_pk, podejscie_kp, opis FROM odcinki_punktowane  WHERE id = ?";
        Route route = jdbcTemplate.queryForObject(sql, new Object[]{routeId}, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            UUID rId = UUID.fromString(resultSet.getString("region_id"));
            int dlugosc = resultSet.getInt("dlugosc");
            String pkt_poczatkowy = resultSet.getString("pkt_poczatkowy");
            String pkt_koncowy = resultSet.getString("pkt_koncowy");
            int punktacja_pk = resultSet.getInt("punktacja_pk");
            int punktacja_kp = resultSet.getInt("punktacja_kp");
            int podejscie_pk = resultSet.getInt("podejscie_pk");
            int podejscie_kp = resultSet.getInt("podejscie_kp");
            String opis = resultSet.getString("opis");

            return new Route (id, rId, dlugosc, punktacja_pk, punktacja_kp, pkt_poczatkowy, pkt_koncowy, podejscie_pk, podejscie_kp, opis);
        });
        return Optional.ofNullable(route);
    }


    @Override
    public List<Route> selectAllRoutes() {
        String sql = "SELECT id, region_id, dlugosc, pkt_poczatkowy, pkt_koncowy, punktacja_pk, punktacja_kp, podejscie_pk, podejscie_kp, opis FROM odcinki_punktowane";
        List<Route> routes = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            UUID rId = UUID.fromString(resultSet.getString("region_id"));
            int dlugosc = resultSet.getInt("dlugosc");
            String pkt_poczatkowy = resultSet.getString("pkt_poczatkowy");
            String pkt_koncowy = resultSet.getString("pkt_koncowy");
            int punktacja_pk = resultSet.getInt("punktacja_pk");
            int punktacja_kp = resultSet.getInt("punktacja_kp");
            int podejscie_pk = resultSet.getInt("podejscie_pk");
            int podejscie_kp = resultSet.getInt("podejscie_kp");
            String opis = resultSet.getString("opis");

            return new Route (id, rId, dlugosc, podejscie_pk, podejscie_kp, pkt_poczatkowy, pkt_koncowy, punktacja_pk, punktacja_kp,  opis);
        });
        return routes;
    }

    @Override
    public List<Route> selectRouteByRegionId(UUID regionId) {
        String sql = "SELECT id, region_id, dlugosc, pkt_poczatkowy, pkt_koncowy, punktacja_pk, punktacja_kp, podejscie_pk, podejscie_kp, opis FROM odcinki_punktowane  WHERE region_id = ?";
        List<Route> routes = jdbcTemplate.query(sql, new Object[]{regionId}, (resultSet, i) -> {
            UUID id = UUID.fromString(resultSet.getString("id"));
            UUID rId = UUID.fromString(resultSet.getString("region_id"));
            int dlugosc = resultSet.getInt("dlugosc");
            String pkt_poczatkowy = resultSet.getString("pkt_poczatkowy");
            String pkt_koncowy = resultSet.getString("pkt_koncowy");
            int punktacja_pk = resultSet.getInt("punktacja_pk");
            int punktacja_kp = resultSet.getInt("punktacja_kp");
            int podejscie_pk = resultSet.getInt("podejscie_pk");
            int podejscie_kp = resultSet.getInt("podejscie_kp");
            String opis = resultSet.getString("opis");

            return new Route (id, rId, dlugosc, podejscie_pk, podejscie_kp, pkt_poczatkowy, pkt_koncowy, punktacja_pk, punktacja_kp,  opis);
        });
        return routes;
    }

    @Override
    public void addRoute(Route route) {
        String sql = "INSERT INTO odcinki_punktowane (id, region_id, dlugosc, pkt_poczatkowy, pkt_koncowy, punktacja_pk, punktacja_kp, podejscie_pk, podejscie_kp, opis) " +
                    " VALUES (uuid_generate_v4(), ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, route.getRegionId()
                                ,route.getLength()
                                ,route.getStartPoint()
                                ,route.getFinishPoint()
                                ,route.getPointsPK()
                                ,route.getPointsKP()
                                ,route.getClimbPK()
                                ,route.getClimbKP()
                                ,route.getDescription());
    }

    @Override
    public int deleteRouteById(UUID id) {
        String sql = "DELETE FROM odcinki_punktowane WHERE id = ?";
        jdbcTemplate.update(sql, id);
        return 0;
    }

    @Override
    public int updateRouteById(UUID id, Route route) {
        String sql = "UPDATE odcinki_punktowane SET dlugosc = ?, pkt_poczatkowy = ?, pkt_koncowy = ?, punktacja_pk = ?, punktacja_kp = ?, podejscie_pk = ?, podejscie_kp = ?, opis = ?" +
                " WHERE id = ?";
        jdbcTemplate.update(sql
                ,route.getLength()
                ,route.getStartPoint()
                ,route.getFinishPoint()
                ,route.getPointsPK()
                ,route.getPointsKP()
                ,route.getClimbPK()
                ,route.getClimbKP()
                ,route.getDescription()
                ,id);

        return 0;
    }
}
