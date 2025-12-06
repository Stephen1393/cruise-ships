const Ship = require('../src/cruise-ship');
const Port = require('../src/Port'); 
const Itinerary = require('../src/Itinerary');

describe('constructor', () => {
    it('returns an object with a starting point property', () => {

        const dover = new Port('Dover');
        const exeter = new Port('Exeter')

        const plan = new Itinerary(dover,exeter)
        const ship = new Ship(plan)

        
        expect(ship.currentPort).toBe(plan.ports[1])
        expect(ship).toBeInstanceOf(Object)
    });
    
    describe('setSail', () => {
        it('checks whether ship atSea is false, and changes to true if so.', () => {
            const dover = new Port('Dover');
            const plan = new Itinerary(dover)
            const ship = new Ship(plan);

            ship.setSail()
            
            expect(ship.atSea).toBe(true)
        });
    });

    it('Can dock at a different port', () => {
        const dover = new Port('dover');
        const exeter = new Port('Exeter');

        const plan = new Itinerary([dover,exeter]);
        const ship = new Ship(plan)


        ship.setSail()
        ship.dock()

    expect(ship.currentPort).toBe(plan.ports[1]); 
    expect(ship.atSea).toBe(false); 
    });
});