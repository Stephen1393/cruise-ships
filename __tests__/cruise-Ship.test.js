const Ship = require('../src/cruise-ship');

describe('constructor', () => {
    it('returns an object with a starting point property', () => {

        const ship = new Ship("Exeter")
        
        expect(ship.startingPort).toBe("Exeter")
        expect(ship).toBeInstanceOf(Object)
    }); 
});