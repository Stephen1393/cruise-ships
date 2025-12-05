const Ship = require('../src/cruise-ship');
const Port = require('../src/Port'); 

describe('constructor', () => {
    it('returns an object with a starting point property', () => {

        const dover = new Port('Dover');
        const ship = new Ship(dover);

        
        expect(ship.currentPort).toBe(dover)
        expect(ship).toBeInstanceOf(Object)
    });
    
    describe('setSail', () => {
        it('checks whether ship atSea is false, and changes to true if so.', () => {
            const dover = new Port('Dover');
            const ship = new Ship(dover);

            ship.setSail()
            
            expect(ship.atSea).toBe(true)
        });
    });

    it('Can dock at a different port', () => {
        const dover = new Port('Dover')
        const ship = new Ship(dover)

        const calais = new Port('Calais')

        ship.setSail()
        ship.dock(calais)

    expect(ship.currentPort).toBe(calais); 
    expect(ship.atSea).toBe(false); 
    });
});