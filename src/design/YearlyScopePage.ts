import Chart, { ChartData } from "chart.js";
import {term, USBank_Headers} from "../logic/types";
import Scope from "./Scope";
export default class YearlyScopePage {
    canvas: HTMLCanvasElement = {} as HTMLCanvasElement;
    ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D
    term: term
    constructor(data:term) {
        this.term = data
        new Scope(data)
    }
}