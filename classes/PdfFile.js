export default class PdfFile {
    #name = null;
    #path = null;

    constructor(name){
        this.#name = name;
        this.#path = require(`@/assets/files/${name}.pdf`);
    }

    get name(){
        return this.#name;
    }

    get path(){
        return this.#path;
    }

    equals(pdfFle){
        return pdfFle?.name === this.name;
    }
}