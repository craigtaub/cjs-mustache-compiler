var assert = require('assert');
var fs = require('fs');
var sinon = require('sinon');
var buildTemplates = require('../lib/buildTemplates');

describe('buildTemplates', function() {
    var firstDirReadStub;
    var firstFileReadStub;
    var jsonStub;
    var templates;

    beforeEach(function () {
        firstDirReadStub = sinon.stub(fs, 'readdirSync', fs.readdirSync);
        firstFileReadStub = sinon.stub(fs, 'readFileSync', fs.readFileSync);
        jsonStub = sinon.stub(JSON, 'stringify', JSON.stringify);
        templates = buildTemplates();
    });

    afterEach(function () {
        firstDirReadStub.restore();
        firstFileReadStub.restore();
        jsonStub.restore();
        templates = '';
    });

    it('should read list from /views folder', function () {
        assert.equal(firstDirReadStub.getCall(0).args[0], 'views');
    });


    describe('if not a partial', function() {
        it('should read contents of /views/item', function () {
            assert.equal(firstFileReadStub.getCall(1).args[0], 'views/test.mustache');
        });

    });

    describe('if a partial', function() {
      it('should read list from /views/partials', function () {
          assert.equal(firstDirReadStub.getCall(1).args[0], 'views/partials');
      });
      it('should read contents of view/partials/item', function () {
            assert.equal(firstFileReadStub.getCall(0).args[0], 'views/partials/test-partial.mustache');
      });

    });

    it('should return all file data in single JSON object ', function () {
        var expectedTemplate = JSON.stringify({
          'test-partial.mustache': 'partial-test\n',
          'test.mustache': 'test\n'
        });

        assert.deepEqual(
          templates,
          expectedTemplate
        );
    });

});
