// adapted from "net.akehurst.language/examples/js/node/src/main.js"
import {net} from "net.akehurst.language-agl-processor";
import { SimpleExampleSyntaxAnalyser } from "./SimpleExampleSyntaxAnalyser";
import LanguageProcessor = net.akehurst.language.api.processor.LanguageProcessor;
import Agl = net.akehurst.language.agl.processor.Agl;
import AutomatonKind_api = net.akehurst.language.api.processor.AutomatonKind_api;
import {SimpleExampleUnit} from "./ASM_TypeDefinitions";
// const Agl = agl_module.net.akehurst.language.agl.processor.Agl; // define a short name

export class ParserUsingAGL {
    grammarStr = `
namespace test
grammar SimpleExample {
    skip WHITE_SPACE = "\\s+" ;
    skip MULTI_LINE_COMMENT = "/\\*[^*]*\\*+(?:[^*/][^*]*\\*+)*/" ;
    skip SINGLE_LINE_COMMENT = "//.*?$" ;
    unit = definition* ;
    definition = classDefinition ;
    classDefinition =
        'class' NAME '{'
            propertyDefinition*
            methodDefinition*
        '}'
    ;
    propertyDefinition = NAME ':' NAME ;
    methodDefinition = NAME '(' parameterList ')' body ;
    parameterList = [ parameterDefinition / ',']* ;
    parameterDefinition = NAME ':' NAME ;
    body = '{' propertyDefinition '}' ;
    NAME = "[a-zA-Z_][a-zA-Z0-9_]*" ;
    BOOLEAN = "true | false" ;
    NUMBER = "[0-9]+([.][0-9]+)?" ;
    STRING = "'(?:\\\\?.)*?'" ;
}
`;
    analyser = new SimpleExampleSyntaxAnalyser();
    proc: LanguageProcessor  = Agl.processorFromString(this.grammarStr, this.analyser, null, null);

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



