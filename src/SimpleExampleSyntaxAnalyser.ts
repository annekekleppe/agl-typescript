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
        console.log(`sppt: ${sppt.root?.name}, maxNumHeads: ${sppt.maxNumHeads}, countTrees: ${sppt.countTrees}, root: ${sppt.root}`);
        if (!!sppt.root) {
            return this.transformNode(sppt.root) as unknown as SimpleExampleType;
        }
        return null;
    }

    private transformNode(sppt: SPPTNode): SimpleExampleType{
        console.log("transform " + sppt.name)
        if (sppt.isLeaf) {
            return this.transformLeaf(sppt as SPPTLeaf) as unknown as SimpleExampleType;
        } else if (sppt.isBranch) {
            return this.transformBranch(sppt as SPPTBranch) as unknown as SimpleExampleType;
        }
        return null;
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
                return this.classDefinition(branch, branch.children.toArray());
            }
            case "propertyDefinition" : {
                return this.propertyDefinition(branch, branch.children.toArray());
            }
            case "methodDefinition" : {
                return this.methodDefinition(branch, branch.children.toArray());
            }
            case "parameterDefinition" : {
                return this.parameterDefinition(branch, branch.children.toArray());
            }
            default : {
                // don't know what the default case should be
                // are there children that do not have a name ????
                var res: SimpleExampleType[] = [];
                for (const child of branch.children.toArray()) {
                    res.push(this.transformNode(child));
                    console.log(child.name);
                }
                return res[0];
            }
        }
        return null;
    }

    private transformLeaf(leaf: SPPTLeaf): SimpleExampleType {
        return new Leaf(leaf.matchedText);
    }

    // unit = definition* ;
    unit(target: SPPTBranch, children: SPPTBranch[]): SimpleExampleUnit {
        let result: SimpleExampleUnit = new SimpleExampleUnit();
        for (const child of children) {
            for (const it of child.branchNonSkipChildren.toArray()) {
                result.definitions.push(this.transformNode(it))
            }
        }
        return result;
    }

    // definition = classDefinition ;
    definition(target: SPPTBranch, children: SPPTBranch[]): Definition {
        return this.transformNode(children[0]);
    }

    // classDefinition =
    //                'class' NAME '{'
    //                    propertyDefinition*
    //                    methodDefinition*
    //                '}'
    //            ;
    classDefinition(target: SPPTBranch, children: SPPTBranch[]): ClassDefinition {
        let name = children[0].nonSkipMatchedText;
        console.log(`NAME NAME: ${name}`);
        let content: SimpleExampleType = null;
        for (const child of children) {
            // for (const it of child.branchNonSkipChildren.toArray()) {
            content = this.transformNode(child);
            // console.log(`typeof content ${typeof content}`);
            // }
        }
        // children[2].branchNonSkipChildren.toArray().map (it =>
        //     classDefinition.properties.push(this.transformNode(it) as PropertyDefinition)
        // );
        // let methodDefinitionList = children[3].branchNonSkipChildren.toArray().map (it =>
        //     this.transformNode(it)
        // );
        let classDefinition = new ClassDefinition(name);
        // classDefinition.properties.push(...propertyDefinitionList);
        // classDefinition.methods.push(...methodDefinitionList);
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
