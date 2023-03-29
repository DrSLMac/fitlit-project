class UserRepository {
    constructor(allUserData) {
      this.allUserData = allUserData
    }


    returnUserData(id) {
      const userDetails = this.allUserData.find(user => id === user.id);
      return userDetails
    }
    //The average step goal amongst all users - in UserRepo to iterate over all users
    allUserAvgData() {
      const avgStepGoal = this.allUserData.reduce((avg, user) => {
        avg += user.dailyStepGoal
        return avg
      }, 0) / this.allUserData.length
      return parseInt(avgStepGoal.toFixed())
    }
  }
  
  export default UserRepository;