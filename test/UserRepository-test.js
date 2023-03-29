import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe('User Repository', () => {
    let user1;
    let user2;
    let user3;
    let userRepo;
    let allUsers;

    beforeEach(() => {
        user1 = new User({
            "id": 1,
            "name": "Jillian Senger",
            "address": "235 Geoffrey Highway, New Lavadaport CA 62933-3709",
            "email": "Cortez51@gmail.com",
            "strideLength": 4.3,
            "dailyStepGoal": 10000,
            "friends": [
              25,
              15,
              20
            ]
          });

        user2 = new User({
            "id": 2,
            "name": "Colt Rohan",
            "address": "48010 Balistreri Harbor, Cleobury IN 43317",
            "email": "Wilford.Barton@gmail.com",
            "strideLength": 2.7,
            "dailyStepGoal": 3000,
            "friends": [
              31,
              16,
              15,
              7
            ]
          });

        user3 = new User({
            "id": 3,
            "name": "Evie Satterfield",
            "address": "1378 Renner Island, Port Lincoln NE 06237-3602",
            "email": "Adan66@yahoo.com",
            "strideLength": 3.9,
            "dailyStepGoal": 4000,
            "friends": [
              21,
              32,
              8
            ]
          });

        allUsers = [user1, user2, user3]
        userRepo = new UserRepository(allUsers)
    })

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate the user repository', function() {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  })

  it('should take in and store an array of all user data', () => {
    expect(userRepo.allUserData).to.deep.equal(allUsers)
  })

  it('should be able to return user data by id', () => {
    expect(userRepo.returnUserData(1)).to.equal(user1);
    expect(userRepo.returnUserData(3)).to.equal(user3);
  });

  it('should be able to calculate the average data for all users', () => {
    expect(userRepo.allUserAvgData()).to.equal(5667)
  });

});