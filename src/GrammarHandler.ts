
import {FileHandler} from "./FileHandler";

export class GrammarHandler {

    fileHandler: FileHandler = new FileHandler();

    getGrammar(filepath: string) : string {
        let grammar: string = this.fileHandler.stringFromFile(filepath);
        if (grammar && grammar.length > 0) {
            return grammar;
        }
        return "";
    }
}


