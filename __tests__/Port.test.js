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


    //practise

    describe('Port', () => {
        let port;

        beforeEach(() => {
            port = new Port('Dover')
        });
        
        it('can be instantiated', () => {
        expect(port).toBeInstanceOf(Port);
    });

        it('check Port object has a name property', () => {
        expect(port.name).toBe('Dover')
    })
});

    describe('addShip', () => {

        let port;
        let ship;
        let itinerary;

        beforeEach(() => {
            port = new Port("Dover");
            itinerary = new Itinerary([port]);
            ship = new Ship(itinerary)
        });

        it('If a ship is docked, it adds ship to an array', () => {

            port.addShip(ship)

            expect(port.ships).toContain(ship)
        });
    });
        
    
    describe('removeShip', () => {

        let port;
        let itinerary;
        let shipA;
        let shipB;

        beforeEach(() => {
            port = new Port("Dover");
            itinerary = new Itinerary([port]);
            shipA = new Ship(itinerary);
            shipB = new Ship(itinerary);
        });

        it('Removes ship if no longer at Port', () => {

            port.addShip(shipA)
            port.addShip(shipB)

            port.removeShip(shipB)

            expect(port.ships).not.toContain((shipB))
            expect(port.ships).toContain((shipA))
        });
    });