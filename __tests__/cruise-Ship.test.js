const Ship = require('../src/cruise-ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');


describe('ship', () => {

    let ship;
    let itinerary;
    let port;

    describe('constructor', () => {
        beforeEach(() => {
            port = new Port('Dover'); 
            itinerary = new Itinerary([port]) 
            ship = new Ship(itinerary)  
        });
    
        
        it('returns an object with a starting point property', () => {
            expect(ship.currentPort).toBe(itinerary.ports[0]) 
            expect(ship).toBeInstanceOf(Object) }); 
        });
        
        it('gets added to port on instantiation', () => { 
            expect(port.ships).toContain(ship)
        }); 


     
     describe('setSail', () => { 
        it('checks whether ship atSea is false, and changes to true if so.', () => { 
            
            ship.setSail() 
            expect(ship.atSea).toBe(true) 
            expect(port.ships).not.toContain(ship)
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
        
        ship.setSail() 
        ship.dock() 
        
        expect(ship.currentPort).toBe(itinerary.ports[1]);
        expect(ship.atSea).toBe(false); 
    });
});