var landing_model_1 = require('./landing-model');
var vm = new landing_model_1.default();
exports.loaded = function (args) {
    var page = args.object;
    page.addCssFile('landing.css');
    page.bindingContext = vm;
};
