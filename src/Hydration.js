class Hydration {
    constructor(userId, hydrationData) {
        this.id = userId;
        this.ounces = hydrationData.filter((data) => data.userID === userId);
        this.hydrationData = hydrationData;
        // console.log("this.hydrationData: ", this.hydrationData)
    }

    avgH2OConsumedPerDay() {
        const avgConsumed = this.ounces.reduce((total, entry) => total += entry.numOunces, 0)
        return (avgConsumed/this.ounces.length).toFixed(1)
    }

    findCurrentWater() {
        const date = new Date().toJSON().slice(0,10).split('-')
        const today = this.ounces.find(entry => entry.date === `${date[0]}/${date[1]}/${date[2]}`)
        // console.log("today: ", today)
        return today.numOunces
    }

}

export default Hydration