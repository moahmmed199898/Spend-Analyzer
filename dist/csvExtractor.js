"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader = /** @class */ (function () {
    function CsvReader(rawData) {
        this.data = [];
        this.rawData = rawData;
        this.init();
    }
    CsvReader.prototype.init = function () {
        this.convertTheDataIntoArrays();
        this.rawData = "";
        this.cleanUpTheData();
    };
    CsvReader.prototype.convertTheDataIntoArrays = function () {
        var _this = this;
        var arrayOfLines = this.rawData.split("\n");
        //devided each line into an array
        arrayOfLines.forEach(function (line) {
            var devidedLines = line.split(",");
            if (devidedLines.length > 1) {
                _this.data.push(devidedLines);
            }
        });
    };
    CsvReader.prototype.cleanUpTheData = function () {
        this.data.forEach(function (transaction) {
            transaction[3] = transaction[3].split("Download from usbank.com. ")[1];
        });
        console.log(this.data[12]);
    };
    CsvReader.prototype.getTheHeaders = function () {
    };
    return CsvReader;
}());
exports.default = CsvReader;
//# sourceMappingURL=csvExtractor.js.map