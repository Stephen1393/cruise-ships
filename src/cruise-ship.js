class Ship {
    constructor(startingPort) {
        this.startingPort = startingPort;
        this.atSea = false;
        
    }

 setSail() {
    if (this.atSea === false) {
        this.atSea = true
    }
 }
        
}

module.exports = Ship