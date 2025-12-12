const Ship = require('../src/cruise-ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('ship', () => {

    let ship;
    let itinerary;
    let port;

    beforeEach(() => {
        dover = {
            name:"Dover",
            addShip:jest.fn(),
            removeShip:jest.fn(),
            ships: []
        };

        exeter = {
            name:"Exeter",
            addShip:jest.fn(),
            removeShip:jest.fn(),
            ships: []
        };

            itinerary = {ports:[dover,exeter]} 
            ship = new Ship(itinerary)  
        });
    

    describe('constructor', () => {
        
        it('returns an object with a starting point property', () => {
            expect(ship.currentPort).toBe(itinerary.ports[0]) 
            expect(ship).toBeInstanceOf(Object) 
        }); 
    });
        
        it('gets added to port on instantiation', () => { 
            expect(dover.addShip).toHaveBeenCalledTimes(1)
            expect(dover.addShip).toHaveBeenCalledWith(ship)
        }); 


     
     describe('setSail', () => { 
        it('checks whether ship atSea is false, and changes to true if so.', () => { 
            ship.setSail()

            expect(ship.atSea).toBe(true) 
            expect(dover.removeShip).toHaveBeenCalledWith(ship)
            expect(dover.removeShip).toHaveBeenCalledTimes(1)
        });
    });
}); 


describe('Sailing between multiply ports', () => {
    
    let dover;
    let exeter;
    let itinerary;
    let ship;
    
    beforeEach(() => {  
        dover = {
            name:"Dover",
            addShip:jest.fn(),
            removeShip:jest.fn(),
            ships: []
        };

        exeter = {
            name:"Exeter",
            addShip:jest.fn(),
            removeShip:jest.fn(),
            ships: []
        };

            itinerary = {ports:[dover,exeter]} 
            ship = new Ship(itinerary)  
        });
    
    it('Can dock at a different port', () => {
        ship.setSail() 
        ship.dock() 

        expect(exeter.addShip).toHaveBeenCalledTimes(1)
        expect(exeter.addShip).toHaveBeenCalledWith(ship)
        expect(ship.atSea).toBe(false); 
    });
});