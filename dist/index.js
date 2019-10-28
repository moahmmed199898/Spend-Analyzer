"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __importDefault(require("./logic/data"));
var csvExtractor_1 = __importDefault(require("./logic/csvExtractor"));
var dataAnalyzer_1 = __importDefault(require("./logic/dataAnalyzer"));
var YearlyScopePage_1 = __importDefault(require("./design/YearlyScopePage"));
var Index = /** @class */ (function () {
    function Index() {
        this.init();
    }
    Index.prototype.init = function () {
        var csvExtractor = new csvExtractor_1.default(data_1.default);
        var data = csvExtractor.getCSVData();
        csvExtractor.distroy();
        var dataAnalyzer = new dataAnalyzer_1.default(data);
        var yearlyScope = dataAnalyzer.GetMonthlyScope(2019);
        console.log(yearlyScope);
        new YearlyScopePage_1.default(yearlyScope);
    };
    return Index;
}());
new Index;
//# sourceMappingURL=index.js.map