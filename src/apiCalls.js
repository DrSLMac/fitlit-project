const fetchUserData = () => {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
        .then(response => response.json())
        .catch((error) => 
        console.log('There was a problem with loading your data. Please try again.', error));
};

const fetchSleepData = () => {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
        .then(response => response.json())
        .catch((error) => 
        console.log('There was a problem with loading your data. Please try again.', error));
};

const fetchHydrationData = () => {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
        .then(response => response.json())
        .catch((error) => 
        console.log('There was a problem with loading your data. Please try again.', error));
};

const fetchActivityData = () => {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/activity')
        .then(response => response.json())
        .catch((error) => 
        console.log('There was a problem with loading your data. Please try again.', error));
};

export { fetchUserData, fetchSleepData, fetchHydrationData, fetchActivityData }

// User Data	GET	https://fitlit-api.herokuapp.com/api/v1/users
// Sleep Data	GET	https://fitlit-api.herokuapp.com/api/v1/sleep
// Hydration Data	GET	https://fitlit-api.herokuapp.com/api/v1/hydration
// Activity Data	GET	https://fitlit-api.herokuapp.com/api/v1/activity