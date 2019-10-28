"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataAnalyzer = /** @class */ (function () {
    function DataAnalyzer(data) {
        this.data = [];
        this.data = data;
    }
    DataAnalyzer.prototype.GetYearlyScope = function () {
        var years = {};
        var currentYear = (new Date()).getFullYear();
        while (true) {
            var year = this.data.filter(function (x) { return x.date.getFullYear() == currentYear; });
            if (year.length === 0 || currentYear < 0)
                break;
            years[currentYear] = year;
            currentYear--;
        }
        return years;
    };
    DataAnalyzer.prototype.GetMonthlyScope = function (year) {
        var months = {};
        var _loop_1 = function (i) {
            var month = i + 1;
            var SingleMonth = this_1.data.filter(function (x) { return x.date.getMonth() === i && x.date.getFullYear() === year; });
            months[month] = SingleMonth;
        };
        var this_1 = this;
        for (var i = 0; i < 12; i++) {
            _loop_1(i);
        }
        return months;
    };
    return DataAnalyzer;
}());
exports.default = DataAnalyzer;
//# sourceMappingURL=dataAnalyzer.js.map