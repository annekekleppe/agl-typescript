/**
 * Copyright (C) 2020 Dr. David H. Akehurst (http://dr.david.h.akehurst.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// const agl_module = require('net.akehurst.language-agl-processor');
// see https://kotlinlang.org/docs/js-to-kotlin-interop.html#jsexport-annotation

import {net} from "net.akehurst.language-agl-processor";
import {
    ClassDefinition,
    Definition, Leaf,
    MethodDefinition,
    ParameterDefinition,
    PropertyDefinition, SimpleExampleType,
    SimpleExampleUnit
} from "./ASM_TypeDefinitions";
import SyntaxAnalyser = net.akehurst.language.api.syntaxAnalyser.SyntaxAnalyser;
import SharedPackedParseTree = net.akehurst.language.api.sppt.SharedPackedParseTree;
import SPPTBranch = net.akehurst.language.api.sppt.SPPTBranch;
import SPPTLeaf = net.akehurst.language.api.sppt.SPPTLeaf;
import SPPTNode = net.akehurst.language.api.sppt.SPPTNode;

export class SimpleExampleSyntaxAnalyser implements SyntaxAnalyser {
    constructor() {
    }

    locationMap: any;

    clear(): void {
        throw new Error("Method not implemented.");
    }

    transform<SimpleExampleType>(sppt: SharedPackedParseTree): SimpleExampleType {
        console.log(`sppt: ${sppt.root.name}, maxNumHeads: ${sppt.maxNumHeads}, countTrees: ${sppt.countTrees}, root: ${sppt.root}`);

        if (!!sppt.root) {
            return this.transformNode(sppt.root) as unknown as SimpleExampleType;
        } else {
            return null;
        }
    }

    private transformNode(node: SPPTNode): SimpleExampleType {
        if (node.isLeaf) {
            return this.transformLeaf(node as SPPTLeaf);
        } else if (node.isBranch) {
            return this.transformBranch(node as SPPTBranch);
        } else {
            //should error
            return null;
        }
    }

    private transformBranch(branch: SPPTBranch): SimpleExampleType {
        switch (branch.name) {
            case "unit" : {
                return this.unit(branch, branch.children.toArray());
            }
            case "definition" : {
                return this.definition(branch, branch.children.toArray());
            }
            case "classDefinition" : {
                return this.classDefinition(branch, branch.children);
            }
            case "propertyDefinition" : {
                return this.propertyDefinition(branch, branch.children);
            }
            case "methodDefinition" : {
                return this.methodDefinition(branch, branch.children);
            }
            case "parameterDefinition" : {
                return this.parameterDefinition(branch, branch.children);
            }
        }
        return null;
        // var res = `branch ${branch.name} \n`;
        // for (const child of branch.children.toArray()) {
        //     res += this.transformNode(child);
        //     res+='\n';
        // }
        // return res;
    }

    private transformLeaf(leaf: SPPTLeaf, arg?: any): SimpleExampleType {
        return new Leaf(leaf.matchedText);
    }

    // unit = definition* ;
    unit(target: SPPTBranch, children: SPPTBranch[]): SimpleExampleUnit {
        let result: SimpleExampleUnit;
        let definitions = children[0].branchNonSkipChildren.map(it =>
            child => this.transform<Definition>(it)
        );
        result.definitions.push(definitions);
        return result;
    }

    // definition = classDefinition ;
    definition(target: SPPTBranch, children: SPPTBranch[]): Definition {
        return this.transformBranch(children[0]);
    }

    // classDefinition =
    //                'class' NAME '{'
    //                    propertyDefinition*
    //                    methodDefinition*
    //                '}'
    //            ;
    classDefinition(target: SPPTBranch, children: SPPTBranch[]): ClassDefinition {
        let name = children[0].nonSkipMatchedText;
        let propertyDefinitionList = children[1].branchNonSkipChildren.map (it =>
            this.transform<PropertyDefinition>(it)
        );
        let methodDefinitionList = children[2].branchNonSkipChildren.map (it =>
            this.transform<MethodDefinition>(it)
        );
        let classDefinition = new ClassDefinition(name);
        classDefinition.properties.push(propertyDefinitionList);
        classDefinition.methods.push(methodDefinitionList);
        return classDefinition;
    }

    //propertyDefinition = NAME ':' NAME ;
    propertyDefinition(target: SPPTBranch, children: SPPTBranch[]): PropertyDefinition {
        let name = children[0].nonSkipMatchedText;
        let typeName = children[1].nonSkipMatchedText;
        return new PropertyDefinition(name, typeName);
    }

    //methodDefinition = NAME '(' parameterList ')' body ;
    //parameterList = [ parameterDefinition / ',']* ;
    methodDefinition(target: SPPTBranch, children: SPPTBranch[]): MethodDefinition {
        let name = children[0].nonSkipMatchedText
        let paramList = children[1].branchNonSkipChildren[0].branchNonSkipChildren.map (it =>
            this.transform<ParameterDefinition>(it)
        )
        let method = new MethodDefinition(name, paramList);
        // body!
        return method;
    }


    //parameterDefinition = NAME ':' NAME ;
    parameterDefinition(target: SPPTBranch, children: SPPTBranch[]): ParameterDefinition {
        let name = children[0].nonSkipMatchedText;
        let typeName = children[1].nonSkipMatchedText;
        return new ParameterDefinition(name, typeName);
    }

    //body = '{' statement* '}' ;
}
