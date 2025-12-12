const Ship = require('../src/cruise-ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('ship', () => {

    let ship;
    let itinerary;
    let port;

    beforeEach(() => {
            port = new Port('Dover'); 
            itinerary = new Itinerary([port]) 
            ship = new Ship(itinerary)  
        });
    

    describe('constructor', () => {
        
        it('returns an object with a starting point property', () => {
            expect(ship.currentPort).toBe(itinerary.ports[0]) 
            expect(ship).toBeInstanceOf(Object) 
        }); 
    });
        
        it('gets added to port on instantiation', () => { 
            const port = {name:"Dover", addShip:jest.fn()}
            const itinerary = {ports:[port]}
            const ship = new Ship(itinerary)
            


            expect(port.addShip).toHaveBeenCalledTimes(1)
            expect(port.addShip).toHaveBeenCalledWith(ship)
        }); 


     
     describe('setSail', () => { 
        it('checks whether ship atSea is false, and changes to true if so.', () => { 
            const port = {name:"Exeter", removeShip:jest.fn()}
            ship.currentPort = port
            
            ship.setSail()

            expect(ship.atSea).toBe(true) 
            expect(port.removeShip).toHaveBeenCalledWith(ship)
            expect(port.removeShip).toHaveBeenCalledTimes(1)
        });
    });
}); 


describe('Sailing between multiply ports', () => {
    
    let dover;
    let exeter;
    let itinerary;
    let ship;
    
    beforeEach(() => {
        dover = new Port('dover'); 
        exeter = new Port('Exeter'); 
        itinerary = new Itinerary([dover,exeter]); 
        ship = new Ship(itinerary)
    });
    
    it('Can dock at a different port', () => {
        const port = {name:"Dover", addShip:jest.fn(), removeShip:jest.fn()}
        const port2 = {name:"Exeter", addShip:jest.fn()}

        ship.currentPort = port
        itinerary.ports[1] = port2

        ship.setSail() 

        ship.dock() 

        expect(port2.addShip).toHaveBeenCalledTimes(1)
        expect(port2.addShip).toHaveBeenCalledWith(ship)
        expect(ship.atSea).toBe(false); 
    });
});