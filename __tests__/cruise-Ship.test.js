const Ship = require('../src/cruise-ship');
const Port = require('../src/Port'); 
const Itinerary = require('../src/Itinerary');

describe('constructor', () => {
    it('returns an object with a starting point property', () => {

        const port = new Port('Dover');

        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary)

        
        expect(ship.currentPort).toBe(itinerary.ports[0])
        expect(ship).toBeInstanceOf(Object)
    });

    it('gets added to port on instantiation', () => {
        const port = new Port('Dover');
            const itinerary = new Itinerary([port])
            const ship = new Ship(itinerary);

            expect(port.ships).toContain(ship)
    });
    
    describe('setSail', () => {
        it('checks whether ship atSea is false, and changes to true if so.', () => {
            const port = new Port('Dover');
            const itinerary = new Itinerary([port])
            const ship = new Ship(itinerary);

            ship.setSail()
            
            expect(ship.atSea).toBe(true)
            expect(port.ships).not.toContain(ship)
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