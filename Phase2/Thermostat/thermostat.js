// Starts with temp of 20 degrees DONE
// Up method - Max temp of 25 if power saving is on else 32
// Down method - Min 10 degrees 
// Power saving by default - Max temp of 25 Min when on
// Max temp of 32 when off
// Reset - sets it to 20
// Get current energy setting

class Thermostat{
  constructor(){
    this.temperature = 20;
    this.powerSaving = true;
    this.maxTempOnPS = 25;
    this.maxTempWithoutPS = 32;
    this.minPossibleTemp = 10;
  }

  currentTemp(){
    return this.temperature;
  }

  up(){
    if (this.powerSaving) {
        if (this.temperature < this.maxTempOnPS) {
            return this.temperature += 1;
        }
    } else {
        if (this.temperature < this.maxTempWithoutPS) {
            return this.temperature += 1;
        }
    }
  }

  down(){
    if (this.temperature > this.minPossibleTemp) {
        return this.temperature -= 1;
    }
  }

  changePowerSaving(){
    if(this.powerSaving){
      return this.powerSaving = false
    } else {
      return this.powerSaving = true
    }
  }

  reset(){
    return this.temperature = 20;
  }

  energyUsage(){
    if(this.temperature < 18){
      return 'Low';
    }else if(this.temperature >= 18 && this.temperature <= 25){
      return 'Medium';
    }else{
      return 'High';
    }
  }
}

module.exports = Thermostat;