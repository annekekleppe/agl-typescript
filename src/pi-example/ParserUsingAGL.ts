// adapted from "net.akehurst.language/examples/js/node/src/main.js"
import {net} from "net.akehurst.language-agl-processor";
import LanguageProcessor = net.akehurst.language.api.processor.LanguageProcessor;
import Agl = net.akehurst.language.agl.processor.Agl;
import AutomatonKind_api = net.akehurst.language.api.processor.AutomatonKind_api;
import {GrammarHandler} from "../GrammarHandler";
import {FileHandler} from "../FileHandler";
import {PiExampleSyntaxAnalyser} from "./PiExampleSyntaxAnalyser";
import {ExampleEveryConcept} from "./language/gen";
import {ExampleModelUnitWriter} from "./writer/gen/ExampleModelUnitWriter";

export class ParserUsingAGL {
    analyser = new PiExampleSyntaxAnalyser();
    proc: LanguageProcessor = null;
    fileHandler: FileHandler = new FileHandler();
    writer: ExampleModelUnitWriter = new ExampleModelUnitWriter();
    grammarHandler: GrammarHandler = new GrammarHandler();

    constructor() {
        const filepath: string = "src/pi-example/grammars/ExModelParser.agl";
        // const filepath: string = "src/pi-example/grammars/ExModelParser-double-projection.agl";
        // const filepath: string = "src/pi-example/grammars/ExModelParser-left-recursion.agl";
        // const filepath: string = "src/pi-example/grammars/Fixed.agl";

        try {
            this.proc = Agl.processorFromString(this.grammarHandler.getGrammar(filepath), this.analyser, null, null);
        } catch (e) {
            console.log(e.message);
        }
    }


    doIt() {
        if (this.proc) {
            // let sentence: string = this.fileHandler.stringFromFile("src/pi-example/sentences/Simple.exm");
            // let sentence: string = this.fileHandler.stringFromFile("src/pi-example/sentences/SomeNameOrOther.exm");
            let sentence: string = this.fileHandler.stringFromFile("src/pi-example/sentences/SecondTry.exm");
            // let sentence: string = this.fileHandler.stringFromFile("src/pi-example/sentences/LargeUnit.exm");

            let sppt = this.proc.parse(sentence);
            // console.info(sppt);

            let asm = this.proc.process(null, sentence, AutomatonKind_api.LOOKAHEAD_1);
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")
            console.info(this.writer.writeToString(asm as ExampleEveryConcept, 0, false));
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")
        }
    }
}



