class User {
    constructor(userObj) {
        this.id = userObj.id;
        this.name = userObj.name;
        this.address = userObj.address;
        this.email = userObj.email;
        this.strideLength = userObj.strideLength;
        this.dailyStepGoal = userObj.dailyStepGoal;
        this.friends = userObj.friends;
    }

    //return the first name only
    returnFirstName() {
        const nameArr = this.name.split(' ');
        return nameArr[0]
    }

    //find user activity by id#
    findUserData(array) {
        const userArray = array.filter(element => element.userID === this.id)
        return userArray
    }

    //generate a random avatar to populate with random user generation
 
}

export default User;