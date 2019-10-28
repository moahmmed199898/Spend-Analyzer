import Chart, { ChartData } from "chart.js";
import {term} from "../logic/types";
export default class Scope {
        canvas: HTMLCanvasElement = {} as HTMLCanvasElement;
        ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D
        data: term
        constructor(data:term) {
            this.data = data
            this.init();
        }
        init() {
            this.SetupCanvas();
            this.DrawCharts();
            this.render();
        }
    
        private SetupCanvas() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.canvas = <HTMLCanvasElement>document.createElement("canvas");
            this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
        }
    
    
        private getTheSpendOfEachTerm() {
            let spendPerTerm:Array<number> = [] as Array<number>
            for(const year in this.data) {
                console.log(this.data[year].length !== 0)
                console.log(year)
                    let spends:Array<number> = this.data[year].filter(x=>x.amount<0).map(x=>x.amount*-1);
                    let totalSpend:number =  spends.reduce((a,b)=>a+b);
                    spendPerTerm.push(totalSpend);
            }
            return spendPerTerm;
        }
    
        private getTheDepositsOfEachTerm() {
            let DepositsPerTerm:Array<number> = [] as Array<number>
            for(const year in this.data) {
                let spends:Array<number> = this.data[year].filter(x=>x.amount>0).map(x=>x.amount*1);
                let totalDeposits:number =  spends.reduce((a,b)=>a+b);
                DepositsPerTerm.push(totalDeposits);
            }
            return DepositsPerTerm;
        }
    
        private DrawCharts() {
            const datasets:ChartData = {
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
                    
        
                }
            const chart = new Chart(this.ctx, {
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
                                suggestedMax:4000,
                                suggestedMin: 0   
                            }
                        }, {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            id: 'Income',
                            ticks: {
                                suggestedMax:4000,
                                suggestedMin: 0
                            }
                        }],
                    },
                }
    
    
            })
        }
    
    
        private render() {
            const body = document.body;
            body.appendChild(this.canvas);
        }
}