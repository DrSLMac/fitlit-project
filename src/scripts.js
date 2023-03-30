// An example of how you tell webpack to use a CSS file
import './css/styles.css';
// import userData from './data/users';
import UserRepository from './UserRepository';
import { fetchData } from './apiCalls';


// An example of how you tell webpack to use a JS file

// console.log("User Data:", userData);

// const newRepo = new UserRepository();

// 🌎 Global Variables 🗺️
let allUserData;

// Fetch Promise:
function startData() {
    Promise.all([fetchData('users', 'userData')])
            .then((dataSet) => {
                // allUserData = new UserRepository(dataSet)
                console.log("dataSet: ", dataSet)
            })
}

// 👂🏼 Event Listeners 👂🏼
window.addEventListener('load', startData)