// adapted from "net.akehurst.language/examples/js/node/src/main.js"
import {net} from "net.akehurst.language-agl-processor";
import LanguageProcessor = net.akehurst.language.api.processor.LanguageProcessor;
import Agl = net.akehurst.language.agl.processor.Agl;
import AutomatonKind_api = net.akehurst.language.api.processor.AutomatonKind_api;
import {GrammarHandler} from "../GrammarHandler";
import {FileHandler} from "../FileHandler";

export class ParserUsingAGL {
    // analyser = new PiExampleSyntaxAnalyser();
    analyser = null;
    proc: LanguageProcessor = null;
    fileHandler: FileHandler = new FileHandler();
    // writer: ExampleModelUnitWriter = new ExampleModelUnitWriter();
    grammarHandler: GrammarHandler = new GrammarHandler();

    constructor() {
        // const filepath: string = "src/pi-meta/grammars/ExModelParser.agl";
        // const filepath: string = "src/pi-meta/grammars/ExModelParser-double-projection.agl";
        const filepath: string = "src/pi-meta/grammars/PiEditGrammar.agl";
        try {
            this.proc = Agl.processorFromString(this.grammarHandler.getGrammar(filepath), this.analyser, null, null);
        } catch (e) {
            console.log(e.message);
        }
    }


    doIt() {
        if (this.proc) {
            // let sentence: string = this.fileHandler.stringFromFile("src/pi-meta/sentences/LanguageDefinition.edit");
            // let sentence: string = this.fileHandler.stringFromFile("src/pi-meta/sentences/MetaEditor.edit");
            let sentence: string = this.fileHandler.stringFromFile("src/pi-meta/sentences/MetaStructure.edit");
            //let sentence: string = this.fileHandler.stringFromFile("src/pi-meta/sentences/octopus-uml.edit");

            let sppt = this.proc.parse(sentence);
            console.info(sppt);

            // let asm = this.proc.process(null, sentence, AutomatonKind_api.LOOKAHEAD_1);
            // console.info(this.writer.writeToString(asm as ExampleEveryConcept, 0, false));
        }
    }
}



