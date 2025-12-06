

class Ship {
    constructor(itinerary) {
      this.itinerary = itinerary
        this.currentPort = itinerary.ports[0];
        this.atSea = false;
        this.previousPort = null;
        
    }

 setSail() {
    if (this.atSea === false) {
        this.atSea = true
    }
    this.previousPort = this.currentPort
    this.currentPort = null;
    
 }
 
  dock() {
    this.currentPort = this.itinerary.ports[1]
    this.atSea = false;
    
  }      
}

module.exports = Ship