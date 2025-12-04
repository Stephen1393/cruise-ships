const Ship = require('../src/cruise-ship');

describe('constructor', () => {
    it('returns an object with a starting point property', () => {

        const ship = new Ship("Exeter")
        
        expect(ship.startingPort).toBe("Exeter")
        expect(ship).toBeInstanceOf(Object)
    });
    
    describe('setSail', () => {
        it('checks whether ship atSea is false, and changes to true if so.', () => {
            const ship = new Ship("Dover")

            ship.setSail()
            
            expect(ship.atSea).toBe(true)
        });
    });
});