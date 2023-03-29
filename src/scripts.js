// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import userData from './data/users';
import UserRepository from './UserRepository';


// An example of how you tell webpack to use a JS file

console.log("User Data:", userData);


const newRepo = new UserRepository();