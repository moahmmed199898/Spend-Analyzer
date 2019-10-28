import { term } from "../logic/types";
export default class Scope {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    data: term;
    constructor(data: term);
    init(): void;
    private SetupCanvas;
    private getTheSpendOfEachTerm;
    private getTheDepositsOfEachTerm;
    private DrawCharts;
    private render;
}
//# sourceMappingURL=Scope.d.ts.map