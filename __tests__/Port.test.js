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