const expect = require('chai').expect;
const pipelineSync = require('../pipeline');

describe('pipelineSync', ()=> {

    it('exists', ()=> {
        expect(pipelineSync).to.be.ok;
    });

    it('adds 1 to the input', ()=> {
        let result = pipelineSync('set 1 | add 1');
        expect(result).to.equal(2);
    });

    it('adds 1 to the input, and multiplies it by 21', ()=> {
        expect(pipelineSync('set 1 | add 1 | mult 21')).to.equal(42)
    });

    it('does a bunch of things', ()=> {
        expect(pipelineSync('set 1 | mult 10 | mult 4 | add 2')).to.equal(42)
    });
});

