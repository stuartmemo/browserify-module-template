var expect = require('chai').expect,
    myModule = require('../lib/index');

describe('My Tests', function () {
    it('should pass the test', function () {
        expect(myModule()).to.equal('hello');
    });
});
