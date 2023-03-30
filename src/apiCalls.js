const fetchData = (dataFileName, dataKey) => {
    return fetch(`https://fitlit-api.herokuapp.com/api/v1/${dataFileName}`)
        .then(response => response.json())
        .then(data => data[dataKey])
};

// User Data	GET	https://fitlit-api.herokuapp.com/api/v1/users
// Sleep Data	GET	https://fitlit-api.herokuapp.com/api/v1/sleep
// Hydration Data	GET	https://fitlit-api.herokuapp.com/api/v1/hydration
// Activity Data	GET	https://fitlit-api.herokuapp.com/api/v1/activity

export { fetchData }