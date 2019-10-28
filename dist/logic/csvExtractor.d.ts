import { USBank_Headers } from "./types";
export default class CsvReader {
    private rawData;
    private dataArray;
    private data;
    constructor(rawData: string);
    private init;
    private convertTheDataIntoArrays;
    private cleanUpTheData;
    private catagorizeTheData;
    getCSVData(): USBank_Headers[];
    distroy(): void;
}
//# sourceMappingURL=csvExtractor.d.ts.map