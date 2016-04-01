var assert = require('assert');
var fs = require('fs');
var sinon = require('sinon');

describe('CJSMC', function() {
    var firstDirReadStub;
    var firstFileReadStub;
    var jsonStub;

    beforeEach(function () {
        firstDirReadStub = sinon.stub(fs, 'readdirSync', fs.readdirSync);
        firstFileReadStub = sinon.stub(fs, 'readFileSync', fs.readFileSync);
        jsonStub = sinon.stub(JSON, 'stringify', JSON.stringify);

        require('../lib/index');
    });

    afterEach(function () {
        firstDirReadStub.restore();
        firstFileReadStub.restore();
        jsonStub.restore();
        delete require.cache[require.resolve('../lib/index')];
    });

    it('should read list from /views folder', function () {
        assert.equal(firstDirReadStub.getCall(0).args[0], 'views');
    });


    describe('if not a partial', function() {
        it('should read contents of /views/item', function () {
            assert.equal(firstFileReadStub.getCall(2).args[0], 'views/test.mustache');
        });

    });

    describe('if a partial', function() {
      it('should read list from /views/partials', function () {
          assert.equal(firstDirReadStub.getCall(1).args[0], 'views/partials');
      });
      it('should read contents of view/partials/item', function () {
            assert.equal(firstFileReadStub.getCall(1).args[0], 'views/partials/test-partial.mustache');
      });

    });

    it('should write all file data to object which is JSON.stringify', function () {
        var expectedTemplate = {
          'test-partial.mustache': 'partial-test\n',
          'test.mustache': 'test\n'
        };

        assert.deepEqual(
          jsonStub.getCall(1).args[0],
          expectedTemplate
        );
    });

});
