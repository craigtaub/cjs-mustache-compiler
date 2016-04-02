var buildTemplates = require('./buildTemplates');

startOfFile();
renderTemplates();

function startOfFile() {
    console.log('module.exports = ');
}

function renderTemplates() {
    console.log(buildTemplates());
}
