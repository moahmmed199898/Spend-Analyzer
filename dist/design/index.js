"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexPage = /** @class */ (function () {
    function IndexPage() {
        this.fileInput = document.createElement("input");
        this.init();
    }
    IndexPage.prototype.init = function () {
        this.render();
    };
    IndexPage.prototype.makeTheFileInput = function () {
    };
    IndexPage.prototype.render = function () {
        var body = document.body;
        body.appendChild(this.fileInput);
    };
    return IndexPage;
}());
exports.default = IndexPage;
//# sourceMappingURL=index.js.map