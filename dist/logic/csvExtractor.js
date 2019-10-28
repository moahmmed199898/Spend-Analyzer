"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader = /** @class */ (function () {
    function CsvReader(rawData) {
        this.dataArray = [];
        this.data = [];
        this.rawData = rawData;
        this.init();
    }
    CsvReader.prototype.init = function () {
        this.convertTheDataIntoArrays();
        this.rawData = "";
        this.cleanUpTheData();
        this.catagorizeTheData();
        this.dataArray = [];
    };
    CsvReader.prototype.convertTheDataIntoArrays = function () {
        var _this = this;
        var arrayOfLines = this.rawData.split("\n");
        //devided each line into an array
        arrayOfLines.forEach(function (line) {
            var devidedLines = line.split(",");
            if (devidedLines.length > 1) {
                _this.dataArray.push(devidedLines);
            }
        });
    };
    CsvReader.prototype.cleanUpTheData = function () {
        this.dataArray.forEach(function (transaction) {
            transaction[3] = transaction[3].split("Download from usbank.com. ")[1];
        });
        this.dataArray = this.dataArray.slice(1, this.dataArray.length);
    };
    CsvReader.prototype.catagorizeTheData = function () {
        var _this = this;
        this.dataArray.forEach(function (transaction) {
            var template = {};
            template.date = new Date(transaction[0]);
            template.transaction = transaction[1];
            template.name = transaction[2];
            template.memo = transaction[3];
            template.amount = JSON.parse(transaction[4]);
            _this.data.push(template);
        });
    };
    CsvReader.prototype.getCSVData = function () {
        return this.data;
    };
    CsvReader.prototype.distroy = function () {
        delete this.data;
        delete this.dataArray;
        delete this.rawData;
    };
    return CsvReader;
}());
exports.default = CsvReader;
//# sourceMappingURL=csvExtractor.js.map