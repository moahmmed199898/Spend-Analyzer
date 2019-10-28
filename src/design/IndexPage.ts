export default class IndexPage {
    private fileInput = document.createElement("input");
    constructor() {
        this.init();
    }
    init() {
        this.makeTheFileInput();
        this.render();
    }

    private makeTheFileInput() {
        this.fileInput.type = "file"
    }

    private render() {
        const body = document.body;
        body.appendChild(this.fileInput);
    }
}