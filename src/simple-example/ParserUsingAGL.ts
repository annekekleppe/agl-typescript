// adapted from "net.akehurst.language/examples/js/node/src/main.js"
import {net} from "net.akehurst.language-agl-processor";
import { SimpleExampleSyntaxAnalyser } from "./SimpleExampleSyntaxAnalyser";
import LanguageProcessor = net.akehurst.language.api.processor.LanguageProcessor;
import Agl = net.akehurst.language.agl.processor.Agl;
import AutomatonKind_api = net.akehurst.language.api.processor.AutomatonKind_api;
import {grammarStr} from "./Grammar";

export class ParserUsingAGL {
    analyser = new SimpleExampleSyntaxAnalyser();
    proc: LanguageProcessor  = Agl.processorFromString(grammarStr, this.analyser, null, null);

    doIt() {
        let sentence = `
class David {
  property : String
  prop2 : Integer
  method(p1: Integer, p2: String) {
    x1: String
  }    
}
class Anneke {
}
`;
        let sppt = this.proc.parse(sentence);
        //console.info(sppt.toStringAllWithIndent('  '));

        let asm = this.proc.process(null, sentence, AutomatonKind_api.LOOKAHEAD_1);
        // console.info(typeof asm);
        // console.info((asm as SimpleExampleUnit).treeToString());
        console.info(asm);
        //
        // let formatted = this.proc.formatAsm(asm)
        // console.info("formatted: " + formatted);
    }
}



