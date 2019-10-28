import {USBank_Headers} from "./types";

export default class CsvReader {
    private rawData: string;
    private dataArray:Array<Array<string>> = [];
    private data:USBank_Headers[] = [];
    constructor(rawData:string) {
        this.rawData = rawData;
        this.init();
    }

    private init() {
        this.convertTheDataIntoArrays();
        this.rawData = ""; 
        this.cleanUpTheData();
        this.catagorizeTheData();
        this.dataArray = [];
    }

    private convertTheDataIntoArrays() {
        let arrayOfLines = this.rawData.split("\n");
        //devided each line into an array
        arrayOfLines.forEach((line)=>{
            let devidedLines:Array<string> = line.split(",");
            if(devidedLines.length > 1) {
                this.dataArray.push(devidedLines);
            }
        })
    }

    private cleanUpTheData() {
        this.dataArray.forEach((transaction) => {
            transaction[3] = transaction[3].split("Download from usbank.com. ")[1];
        })        
        this.dataArray = this.dataArray.slice(1,this.dataArray.length)
    }

    private catagorizeTheData() {
        this.dataArray.forEach((transaction)=>{
            const template:USBank_Headers = {} as USBank_Headers;
            template.date =  new Date(transaction[0])
            template.transaction = transaction[1]
            template.name = transaction[2]
            template.memo = transaction[3]
            template.amount =  JSON.parse(transaction[4])
            this.data.push(template)
        })
    }
    public getCSVData() {
        return this.data;
    }

    public distroy() {
        delete this.data
        delete this.dataArray
        delete this.rawData
    }

}

