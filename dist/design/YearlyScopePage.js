"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Scope_1 = __importDefault(require("./Scope"));
var YearlyScopePage = /** @class */ (function () {
    function YearlyScopePage(data) {
        this.canvas = {};
        this.ctx = {};
        this.term = data;
        new Scope_1.default(data);
    }
    return YearlyScopePage;
}());
exports.default = YearlyScopePage;
//# sourceMappingURL=YearlyScopePage.js.map