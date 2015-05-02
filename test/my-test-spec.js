var assert = require('assert'),
    myModule = require('../lib/index');

describe('My Tests', function () {
    it('should pass the test', function () {
        assert.equal(myModule(), 'hello');
    });
});
