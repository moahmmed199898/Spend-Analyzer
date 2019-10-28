import { USBank_Headers, term } from "./types";
export default class DataAnalyzer {
    data: USBank_Headers[];
    constructor(data: USBank_Headers[]);
    GetYearlyScope(): term;
    GetMonthlyScope(year: number): term;
}
//# sourceMappingURL=dataAnalyzer.d.ts.map