const Ship = require('../src/cruise-ship.js');
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js')

describe('Port', () => {
    it('can be instantiated', () => {
        const port = new Port('Dover');

        expect(port).toBeInstanceOf(Port);
    });

    it('check Port object has a name property', () => {
        const port = new Port("Dover")

        expect(port.name).toBe('Dover')
    })
});

    describe('addShip', () => {
        it('If a ship is docked, it adds ship to an array', () => {
            const port = new Port("Dover");
            const itinerary = new Itinerary([port]);
            const ship = new Ship(itinerary)

            port.addShip(ship)

            expect(port.ships).toContain(port.ships[0])
        });
    });
        it('removeShip', () => {
             const port = new Port("Dover");
            const itinerary = new Itinerary([port]);
            const shipA = new Ship(itinerary)
            const shipB = new Ship(itinerary)

            port.addShip(shipA,shipB)

            port.removeShip(shipB)

            expect(port.ships).not.toContain(port.ships[shipB])
        });
