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
    Definition,
    MethodDefinition,
    ParameterDefinition,
    PropertyDefinition,
    SimpleExampleUnit
} from "./ASM_TypeDefinitions";
import SyntaxAnalyser = net.akehurst.language.api.syntaxAnalyser.SyntaxAnalyser;
import SyntaxAnalyserException = net.akehurst.language.api.syntaxAnalyser.SyntaxAnalyserException;
import SharedPackedParseTree = net.akehurst.language.api.sppt.SharedPackedParseTree;
import SPPTBranch = net.akehurst.language.api.sppt.SPPTBranch;
import SPPTLeaf = net.akehurst.language.api.sppt.SPPTLeaf;
import SPPTNode = net.akehurst.language.api.sppt.SPPTNode;
import SyntaxAnalyserAbstract = net.akehurst.language.agl.syntaxAnalyser.SyntaxAnalyserAbstract;

export class SimpleExampleSyntaxAnalyser implements SyntaxAnalyser {
    constructor() {
    }

    locationMap: any;

    clear(): void {
        throw new Error("Method not implemented.");
    }

    transform<T>(sppt: SharedPackedParseTree): T {
        console.log(`sppt: ${sppt.root.name}, maxNumHeads: ${sppt.maxNumHeads}, countTrees: ${sppt.countTrees}, root: ${sppt.root}`);

        if (!!sppt.root) {
            return this.transformNode(sppt.root) as unknown as T;
        } else {
            return null;
        }
    }

    private transformNode(node: SPPTNode, arg?: any): any {
        if (node.isLeaf) {
            return this.transformLeaf(node as SPPTLeaf, arg)
        } else if (node.isBranch) {
            return this.transformBranch(node as SPPTBranch, arg)
        } else {
            //should error
            return null;
        }
    }

    private transformBranch(branch: SPPTBranch, arg?: any): any {
        var brName = branch.name;
        if('unit' == brName) {
            return this.unit(branch.branchNonSkipChildren.toArray())
        } else if ('definition' == brName) {
        } else if ('classDefinition' == brName) {
        } else if ('propertyDefinition' == brName) {
        } else if ('methodDefinition' == brName) {

        } else {
            throw `Error: $brName not handled`;
        }

    }

    private transformLeaf(leaf: SPPTLeaf, arg?: any): string {
        return `leaf ${leaf.matchedText}`;
    }


    private unit(children: Array<SPPTBranch>):SimpleExampleUnit {
        var asm = new SimpleExampleUnit();
        for(const ch of children) {
            const def = this.transformBranch(ch);
            asm.definition.push(def);
        }
        return asm;
    }
}
