class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
        this.atSea = false;
        
    }

 setSail() {
    if (this.atSea === false) {
        this.atSea = true
    }
 }
  dock(port) {
    this.currentPort = port
    this.atSea = false;
  }      
}

module.exports = Ship