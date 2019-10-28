"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chart_js_1 = __importDefault(require("chart.js"));
var Scope = /** @class */ (function () {
    function Scope(data) {
        this.canvas = {};
        this.ctx = {};
        this.data = data;
        this.init();
    }
    Scope.prototype.init = function () {
        this.SetupCanvas();
        this.DrawCharts();
        this.render();
    };
    Scope.prototype.SetupCanvas = function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
    };
    Scope.prototype.getTheSpendOfEachTerm = function () {
        var spendPerTerm = [];
        for (var year in this.data) {
            console.log(this.data[year].length !== 0);
            console.log(year);
            var spends = this.data[year].filter(function (x) { return x.amount < 0; }).map(function (x) { return x.amount * -1; });
            var totalSpend = spends.reduce(function (a, b) { return a + b; });
            spendPerTerm.push(totalSpend);
        }
        return spendPerTerm;
    };
    Scope.prototype.getTheDepositsOfEachTerm = function () {
        var DepositsPerTerm = [];
        for (var year in this.data) {
            var spends = this.data[year].filter(function (x) { return x.amount > 0; }).map(function (x) { return x.amount * 1; });
            var totalDeposits = spends.reduce(function (a, b) { return a + b; });
            DepositsPerTerm.push(totalDeposits);
        }
        return DepositsPerTerm;
    };
    Scope.prototype.DrawCharts = function () {
        var datasets = {
            labels: Object.keys(this.data),
            datasets: [{
                    label: 'Spend',
                    yAxisID: 'Spend',
                    backgroundColor: "red",
                    data: this.getTheSpendOfEachTerm()
                }, {
                    label: 'Income',
                    yAxisID: 'Income',
                    backgroundColor: "green",
                    data: this.getTheDepositsOfEachTerm()
                }],
        };
        var chart = new chart_js_1.default(this.ctx, {
            type: "bar",
            data: datasets,
            options: {
                scales: {
                    yAxes: [{
                            type: 'linear',
                            display: true,
                            position: 'left',
                            id: 'Spend',
                            ticks: {
                                suggestedMax: 4000,
                                suggestedMin: 0
                            }
                        }, {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            id: 'Income',
                            ticks: {
                                suggestedMax: 4000,
                                suggestedMin: 0
                            }
                        }],
                },
            }
        });
    };
    Scope.prototype.render = function () {
        var body = document.body;
        body.appendChild(this.canvas);
    };
    return Scope;
}());
exports.default = Scope;
//# sourceMappingURL=Scope.js.map