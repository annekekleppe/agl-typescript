
import {FileHandler} from "../FileHandler";

export class GrammarHandler {

    fileHandler: FileHandler = new FileHandler();

    getGrammar( ) : string {
        let prefix: string = `
            namespace test
            grammar PiExample {
                skip WHITE_SPACE = "\\s+" ;
                skip MULTI_LINE_COMMENT = "/\\*[^*]*\\*+(?:[^*/][^*]*\\*+)*/" ;
                skip SINGLE_LINE_COMMENT = "//.*?$" ;`
        // let grammar: string = this.fileHandler.stringFromFile("src/pi-example/fromProjectIt/ExModelParser.agl");
        // let grammar: string = this.fileHandler.stringFromFile("src/pi-example/fromProjectIt/ExModelParser-double-projection.agl");
        let grammar: string = this.fileHandler.stringFromFile("src/pi-example/fromProjectIt/ExModelParser-left-recursion.agl");
        if (grammar && grammar.length > 0) {
            return prefix + grammar;
        }
        return "";
    }
}


