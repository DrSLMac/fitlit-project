import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {
    let user1, user2;
    let hydrationObj1, hydrationObj2, hydrationObj3, hydrationObj4, hydrationObj5, hydrationObj6, hydrationObj7;
    let allHydration, hydrationArr1, hydrationArr2;

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
          })

        hydrationObj1 = {
            "userID": 2,
            "date": "2023/03/24",
            "numOunces": 35
          }

        hydrationObj2 = {
            "userID": 2,
            "date": "2023/03/25",
            "numOunces": 92
          }

        hydrationObj3 = {
            "userID": 2,
            "date": "2023/03/26",
            "numOunces": 88
          }

        hydrationObj4 = {
            "userID": 2,
            "date": "2023/03/27",
            "numOunces": 68
          }
        
        hydrationObj5 = {
            "userID": 1,
            "date": "2023/03/24",
            "numOunces": 28
          };

        hydrationObj6 = {
            "userID": 1,
            "date": "2023/03/25",
            "numOunces": 50
          };

        hydrationObj7 = {
            "userID": 1,
            "date": "2023/03/26",
            "numOunces": 21
          };

        allHydration = [hydrationObj1, hydrationObj2,   hydrationObj3, hydrationObj4, hydrationObj5, hydrationObj6, hydrationObj7]

        hydrationArr1 = [hydrationObj5, hydrationObj6, hydrationObj7];

        hydrationArr2 = [hydrationObj1, hydrationObj2, hydrationObj3, hydrationObj4];
    })

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should instantiate the user repository', function() {
    expect(user1).to.be.an.instanceOf(User);
    expect(user2).to.be.an.instanceOf(User);
  });

  it('should have a unique ID', () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
  });

  it('should have a name', () => {
    expect(user1.name).to.equal('Jillian Senger');
    expect(user2.name).to.equal('Colt Rohan')
  });

  it('should have an address', () => {
    expect(user1.address).to.equal('235 Geoffrey Highway, New Lavadaport CA 62933-3709');
    expect(user2.address).to.equal('48010 Balistreri Harbor, Cleobury IN 43317');
  });

  it('should have an email address', () => {
    expect(user1.email).to.equal('Cortez51@gmail.com');
    expect(user2.email).to.equal('Wilford.Barton@gmail.com');
  });

  it('should have a stride length', () => {
    expect(user1.strideLength).to.equal(4.3);
    expect(user2.strideLength).to.equal(2.7);
  });

  it('should have a daily step goal', () => {
    expect(user1.dailyStepGoal).to.equal(10000);
    expect(user2.dailyStepGoal).to.equal(3000);
  });

  it('should have a friends list', () => {
    expect(user1.friends).to.deep.equal([25,15,20]);
    expect(user2.friends).to.deep.equal([31,16,15,7]);
  })

  it('should return user first name', () => {
    expect(user1.returnFirstName()).to.equal('Jillian');
    expect(user2.returnFirstName()).to.equal('Colt');
  });

  it('should get data by user id', () => {
    expect(user1.findUserData(allHydration)).to.deep.equal(hydrationArr1);
    expect(user2.findUserData(allHydration)).to.deep.equal(hydrationArr2);
  });

  
});