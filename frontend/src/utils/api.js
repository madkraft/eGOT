

export const fetchMountainRanges = () => {
    return fetch('http://localhost:8080/api/mountains')
        .then((response) => {
            return response.json();
        });

}