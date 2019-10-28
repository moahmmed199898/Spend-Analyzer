import {USBank_Headers, term} from "./types";
export default class DataAnalyzer {
    data:USBank_Headers[] = [];
    constructor(data:USBank_Headers[]) {
        this.data = data;
    }


    public GetYearlyScope() {
        let years:term = {};
        let currentYear:number = (new Date()).getFullYear();
        while(true) {
            let year = this.data.filter(x=>x.date.getFullYear() == currentYear)
            if( year.length === 0 || currentYear < 0) break;
            years[currentYear] = year;
            currentYear--;
        }
        return years;
    }


    public GetMonthlyScope(year:number) {
        let months:term = {};
        for(let i = 0; i<12; i++) {
            let month = i +1;
            let SingleMonth = this.data.filter(x=>x.date.getMonth() === i && x.date.getFullYear() === year);
            months[month] = SingleMonth;
        }   
        return months; 
    }
}