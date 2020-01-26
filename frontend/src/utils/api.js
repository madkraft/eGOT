export const fetchMountainRanges = () => {
  return fetch("http://localhost:8080/api/mountains").then(response => {
    return response.json();
  });
};

export const fetchRegions = () => {
  return fetch("http://localhost:8080/api/mountains/regions").then(response => {
    return response.json();
  });
};

export const fetchRegionByMountainId = id => {
  return fetch(`http://localhost:8080/api/mountains/${id}`).then(response => {
    return response.json();
  });
};

export const fetchRoutes = () => {
  return fetch("http://localhost:8080/api/routes").then(response => {
    return response.json();
  });
};
