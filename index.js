"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm-assure - assure npm builds a package as expected
var async_exec_1 = require("async-exec");
var semver = require("semver");
var npm_lifecycle_event = process.env['npm_lifecycle_event'];
var npm_lifecycle_script = process.env['npm_lifecycle_script'];
var orRegex = /^\bnpm-prepare\s*\|\|/;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var npmVersion, prepare;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!npm_lifecycle_event) return [3 /*break*/, 4];
                    return [4 /*yield*/, async_exec_1.default("npm -v")];
                case 1:
                    npmVersion = _a.sent();
                    if (!semver.lt(npmVersion, "4.0")) return [3 /*break*/, 3];
                    return [4 /*yield*/, async_exec_1.default('npm run prepare', true)];
                case 2:
                    prepare = _a.sent();
                    _a.label = 3;
                case 3:
                    process.exit(orRegex.test(npm_lifecycle_script) ? 1 : 0);
                    return [3 /*break*/, 5];
                case 4:
                    console.error("npm-prepare is currently only intended to be used from npm lifecycle event scripts");
                    process.exit(1);
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELHlDQUE2QjtBQUM3QiwrQkFBZ0M7QUFHaEMsSUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFDOUQsSUFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7QUFDaEUsSUFBTSxPQUFPLEdBQUcsdUJBQXVCLENBQUM7QUFFeEM7Ozs7Ozt5QkFDTSxtQkFBbUIsRUFBbkIsd0JBQW1CO29CQUVGLHFCQUFNLG9CQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O2lDQUFwQixTQUFvQjt5QkFFbkMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQTVCLHdCQUE0QjtvQkFDZCxxQkFBTSxvQkFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFBOzs4QkFBbkMsU0FBbUM7OztvQkFHckQsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOzs7b0JBR3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztvQkFDcEcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O0NBRW5CO0FBZkQsb0JBZUMifQ==