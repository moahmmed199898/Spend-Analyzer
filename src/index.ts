import rawdata from "./logic/data"
import CsvExtractor from "./logic/csvExtractor"
import DataAnalyzer from "./logic/dataAnalyzer"
import FileUploadPage from "./design/IndexPage"
import YearlyScopePage from "./design/YearlyScopePage"
class Index {
    constructor() {
        this.init();
    }
    init() {
        const csvExtractor = new CsvExtractor(rawdata)
        const data = csvExtractor.getCSVData();
        csvExtractor.distroy();
        const dataAnalyzer = new DataAnalyzer(data);
        const yearlyScope = dataAnalyzer.GetMonthlyScope(2019);
        console.log(yearlyScope)
        new YearlyScopePage(yearlyScope);
    }
}

new Index