var fs = require('fs');
var templates;

function buildTemplates() {
    var files = fs.readdirSync('views');
    files.forEach(function (item) {
        if (item === 'partials') {
            var partials = fs.readdirSync('views/' + item);
            partials.forEach(function (partialItem) {
                var data = fs.readFileSync('views/partials/' + partialItem);
                if (!templates) { templates = {}; }
                templates[partialItem] = data.toString();
            });
        } else {
            var data = fs.readFileSync('views/' + item);
            if (!templates) { templates = {}; }
            templates[item] = data.toString();
        }
    });
    return JSON.stringify(templates);
}

module.exports = buildTemplates;
