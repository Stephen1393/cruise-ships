

class Ship {
    constructor(itinerary) {
      this.itinerary = itinerary
        this.currentPort = itinerary.ports[0];
        this.atSea = false;
        this.previousPort = null;
        
        this.currentPort.addShip(this);
        
    }

 setSail() {
    if (this.atSea === false) {
        this.atSea = true
    }
    this.currentPort.removeShip(this)
    this.previousPort = this.currentPort
    this.currentPort = null;
    
    
 }
 
  dock() {
    this.currentPort = this.itinerary.ports[1]
    this.atSea = false;
    this.currentPort.addShip(this)
    
  }      
}

module.exports = Ship