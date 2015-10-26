var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require('data/observable');
var users_1 = require('../../shared/users');
var frame_1 = require('ui/frame');
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.call(this);
        this.set('username', '');
        this.set('password', '');
    }
    default_1.prototype.success = function () {
        frame_1.topmost()
            .navigate({
            animated: true,
            moduleName: 'components/dailyWorkout/dailyWorkout'
        });
    };
    default_1.prototype.signUp = function () {
        var _this = this;
        users_1.default.register(this.get('username'), this.get('password'))
            .then(function (data) { return _this.success(); });
    };
    return default_1;
})(observable_1.Observable);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
