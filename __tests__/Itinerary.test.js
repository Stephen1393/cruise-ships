const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port'); 

describe('Itinerary', () => {
    it('can be instantiated', () => {
        const itinerary = new Itinerary("Plan")

        expect(itinerary).toBeInstanceOf(Itinerary)
    });

    it('Checks Itinerary has a ports property, and then it returns an array', () => {
        const exeter = new Port('Dover');
        const dover = new Port('Exeter');

        const plan = new Itinerary([exeter,dover]);
    
        expect(plan.ports).toEqual([exeter,dover]);
    });
});