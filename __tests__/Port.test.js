const Ship = require('../src/cruise-ship.js');
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js')


    describe('addShip', () => {

        let port;
        let ship;
        let itinerary;

        beforeEach(() => {
            port = new Port("Dover");
            itinerary = new Itinerary([port]);
            ship = jest.fn()
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
            shipA = jest.fn()
            shipB = jest.fn()
        });

        it('Removes ship if no longer at Port', () => {

            port.addShip(shipA)
            port.addShip(shipB)

            port.removeShip(shipB)

            expect(port.ships).not.toContain((shipB))
            expect(port.ships).toContain((shipA))
        });
    });