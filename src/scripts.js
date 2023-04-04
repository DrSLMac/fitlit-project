// An example of how you tell webpack to use a CSS file
import './css/styles.css';
// import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import { fetchUserData, fetchSleepData, fetchHydrationData, fetchActivityData } from './apiCalls';

// 🌎 Global Variables 🗺️
let userData;
let sleepData;
let activityData;
let hydrationData;
let allUserData;
let currentUser;
let userAllData;
let userSleepData;
let userActivityData;
let userHydrationData;
let waterIcon;

// Fetch Promise:
function startData() {
    Promise.all([
        fetchUserData(),
        fetchSleepData(),
        fetchHydrationData(),
        fetchActivityData()
    ])
    .then((dataSet) => {
        userData = dataSet[0].users
        sleepData = dataSet[1].sleepData
        hydrationData = dataSet[2].hydrationData
        activityData = dataSet[3].activityData
        allUserData = new UserRepository(userData)
        generatePageLoad(allUserData)
    })
}

// 👩🏼‍💻 Query Selectors 👩🏼‍💻
const userName = document.getElementById('username')
const welcomeMessage = document.getElementById('welcome-message')
const fullName = document.getElementById('full-name')
const streetAddress = document.getElementById('street-address');
const cityState = document.getElementById('city-state');
const emailAddress = document.getElementById('email-address')
const strideLength = document.getElementById('stride-length')
const userActivityDetails = document.querySelector(".activity-data")
const dailyAvgWater = document.getElementById('daily-avg-water')
const todayIntake = document.getElementById('today-intake')
const hydrationGrid = document.querySelector('.hydration-grid')
// const waterIcon = document.querySelector('.water-icon')
const hydrationCells = document.querySelectorAll('.hydration-cell')
const fullCup = document.getElementById('full-cup')
const emptyCup = document.getElementById('empty-cup')

// 👂🏼 Event Listeners 👂🏼
window.addEventListener('load', startData)
// waterIcon.addEventListener('click', () => console.log("I've been clicked!"), true)
// hydrationGrid.addEventListener('click', () => console.log("i've been clicked"))
hydrationCells.forEach(element => element.addEventListener('click', addWater))


function generatePageLoad(userData) {
    console.log("userData ln 53: ", userData)
    currentUser = generateRandomUser(userData.allUserData)
    console.log("currentUser: ", currentUser)
    welcomeUser(currentUser)
    userSleepData = currentUser.findUserData(sleepData)
    // console.log("userSleepData ln 61: ", userSleepData)

    userHydrationData = new Hydration(currentUser.id, hydrationData)
    userAllData = [currentUser, currentUser.findUserData(hydrationData), currentUser.findUserData(activityData), currentUser.findUserData(sleepData)]
    console.log("userAllData: ", userAllData)
    renderUserActivityData()
    renderHydrationData()
    renderWaterCups()
}

function generateRandomUser(userData) {
    let currentUserObj = userData[Math.floor(Math.random() * userData.length)]
    generateRandomAvatar()
    return currentUser = new User(currentUserObj)
}

function generateRandomAvatar() {
    const min = 1;
    const max = 27
    let randomAvatar = `./images/avatars/avatar${Math.floor(Math.random() * (max - min) + min)}.png`
    document.getElementById('user-avatar').src=[randomAvatar]
}

function todayDate() {
    const date = new Date().toJSON().slice(0,10).split('-')
    const today = `${date[1]}/${date[2]}/${date[0]}`
    return today
}

function welcomeUser() {
    welcomeMessage.innerHTML = '';
    welcomeMessage.innerHTML += `
    <h2>Welcome Back, ${currentUser.returnFirstName()}!</h2>
    <h3>Today is ${todayDate()}</h3>
    `
    const streetAddi = currentUser.address.split(',')
    const lineTwo = streetAddi[1].split(' ')
    fullName.innerText = `${currentUser.name}`;
    streetAddress.innerText = `${streetAddi[0]}`;
    cityState.innerText = `${lineTwo[1]}, ${lineTwo[2]} ${lineTwo[3]}`;
    emailAddress.innerText = `${currentUser.email}`;
    strideLength.innerText = `${currentUser.strideLength}`;
}

function renderUserActivityData() {
    userActivityDetails.innerHTML = ''
    userActivityData = currentUser.findUserData(activityData);
    let diff = currentUser.userAvgSteps(userActivityData) - allUserData.allUserAvgData();
    let direction;
    if (diff === 0) {
        direction = `Your daily step goal is the same as the average user's step goal(${allUserData.allUserAvgData()})`
    } else if (diff > 0) {
        direction = `Your daily step goal is ${diff} above the average user's step goal (${allUserData.allUserAvgData()})`
    } else {
        direction = `Your daily step goal is ${diff} below the average user's step goal (${allUserData.allUserAvgData()})`
    }
    userActivityDetails.innerHTML += `
        <h4>Daily Step Goal: </h4>
        <p>${currentUser.dailyStepGoal}</p>
        <h4>Average Daily Steps: </h4>
        <p>${currentUser.userAvgSteps(userActivityData)}</p>
        <p>${direction}</p>
    `
}

function renderHydrationData() {
    dailyAvgWater.innerText = `${userHydrationData.avgH2OConsumedPerDay()} oz`
    todayIntake.innerText = `${userHydrationData.findCurrentWater()} oz`
}

function renderWaterCups() {
    const numWaterCups = Math.floor((userHydrationData.findCurrentWater()/8))
    let counter = 0;

    hydrationCells.forEach(cell => {
        cell.innerHTML = ''

        if (counter < numWaterCups) {
            counter += 1;
            cell.innerHTML += `<img class="full-cup" role="button" src="./images/full-cup.png" alt="full cup icon"/>`
        } else {
            cell.innerHTML += `<img class="empty-cup" role="button" src="./images/empty-cup.png" alt="empty cup icon"/>`
        }
    })
}

function addWater(event) {
    console.log("What is it?", event.target.src)
    let currentHydration = userHydrationData.findCurrentWater()
    if (event.target.classList.contains('empty-cup')) {
        event.target.src = './images/full-cup.png'
        event.target.classList = 'full-cup'
        event.target.alt = 'full cup icon'
        currentHydration += 8
        console.log("get hydration", currentHydration)
        todayIntake.innerText = `${currentHydration} oz`
    } else if (event.target.classList.contains('full-cup')) {
        event.target.src = './images/empty-cup.png'
        event.target.classList = 'empty-cup'
        event.target.alt = 'empty cup icon'
        currentHydration -= 8
        todayIntake.innerText = `${currentHydration} oz`
    }
}





// 📆 Calendar 📆
let date=new Date(); 
let year=date.getFullYear();
let month=date.getMonth();
const day=document.querySelector(".calendar-dates");
const currdate=document.querySelector(".calendar-current-date");
const arrows=document.querySelectorAll(".calendar-navigation span");

const months=[
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"];

const manipulate=()=> {
    let dayOne = new Date(year, month, 1).getDay();
  
    let lastDate = new Date(year, month + 1, 0).getDate();
 
    let lastDayOfMonth = new Date(year, month, lastDate).getDay();

    let prevMonthEnd = new Date(year, month, 0).getDate();

    let cal = ""; 

    // loop to add the last dates of the previous month
    for (let i = dayOne; i > 0; i--) {
        cal += `<li class="inactive">${prevMonthEnd - i + 1}</li>`;
    }

    // loop to add the dates of the current month
    for (let i = 1; i <= lastDate; i++) {
        // check if the current date is today
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";
        cal += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayOfMonth; i < 6; i++) {
        cal += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
    }
    currdate.innerText=`${months[month]} ${year}`;
    day.innerHTML=cal;
}
manipulate();

arrows.forEach(icon=> {
    icon.addEventListener("click", ()=> {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date();
        }
        manipulate();
    });
});