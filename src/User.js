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

    userAvgSteps(array) {
        const userTotal = array.reduce((total, item) => total += item.numSteps, 0)
        return (userTotal/array.length).toFixed()
    }
 
}

export default User;