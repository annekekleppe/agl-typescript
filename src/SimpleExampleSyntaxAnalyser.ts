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
import SyntaxAnalyserAbstract = net.akehurst.language.agl.syntaxAnalyser.SyntaxAnalyserAbstract;

export class SimpleExampleSyntaxAnalyser extends SyntaxAnalyserAbstract implements SyntaxAnalyser {
    constructor() {
        super();
        // super.register("unit", this.unit as BranchHandler<SimpleExampleUnit>);
        // super.register("definition", this.definition as BranchHandler<Definition>)
        // super.register("classDefinition", this.classDefinition as BranchHandler<ClassDefinition>)
        // super.register("propertyDefinition", this.propertyDefinition as BranchHandler<PropertyDefinition>)
        // super.register("methodDefinition", this.methodDefinition as BranchHandler<MethodDefinition>)
        // super.register("parameterDefinition", this.parameterDefinition as BranchHandler<ParameterDefinition>)
    }

    locationMap: any;
    clear(): void {
        throw new Error("Method not implemented.");
    }
    transform<T>(sppt: SharedPackedParseTree): T {
        console.log(`sppt: ${sppt}, maxNumHeads: ${sppt.maxNumHeads}, countTrees: ${sppt.countTrees}, root: ${sppt.root}`);
        this.visit(sppt);
        if (!!sppt.root) {
            return this.transformBranch(sppt.root.asBranch);
        } else {
            return null;
        }
    }

    transformBranch<T>(branch: SPPTBranch, arg?: any): T {
        let result = this.transformOpt(branch, arg);
        if (!result) throw new SyntaxAnalyserException("cannot transform ${branch}", null);
        return result as T;
    }

    transformOpt<T>(branch?: SPPTBranch, arg?: any): T {
        if (null == branch){
            return null;
        } else {
            // let asm = this.visit(branch, arg) as T;
            // this.locationMap[asm as any] = branch.location;
            // return asm;
            return null;
        }
    }

    // --- IParseTreeVisitor ---
    visit(target: SharedPackedParseTree, arg?: any): any {
        let root = target.root;
        let type = typeof root;
        // console.log(`root: ${root}, typeof root: ${type}`);
        // switch(typeof root) {
        //     case SPPTLeaf: {
        //         //statements;
        //         break;
        //     }
        //     case constant_expression2: {
        //         //statements;
        //         break;
        //     }
        //     default: {
        //         //statements;
        //         break;
        //     }
        // }
        // fun visit(target: SPPTNode, arg: A) = when (target) {
        //     is SPPTLeaf -> visit(target, arg)
        //     is SPPTBranch -> visit(target, arg)
        // else -> error("Unknown subtype of SPPTNode ${target::class.simpleName}")
        //
        // }
        // return this.visit(root, arg);
    }

    // visitLeaf(target: SPPTLeaf, arg?: any): any {
    //     return target.matchedText
    // }
    //
    // visitBranch(target: SPPTBranch, arg?: any): any {
    //     let branchName = target.name
    //     let handler = this.findBranchHandler<any>(branchName)
    //     let branchChildren = target.branchNonSkipChildren// .stream().map(it -> it.getIsEmpty() ? null :
    //     // it).collect(Collectors.toList());
    //     try {
    //         return handler.invoke(target, branchChildren, arg)
    //     } catch (e) {
    //         throw new SyntaxAnalyserException("Exception trying to transform ${target}", e);
    //     }
    // }
    
    // override clear() {
    //     // do nothing
    // }

    // override transform<T> (sppt: SharedPackedParseTree): T {
    //     return super.transform<T>(sppt.root.asBranch, "") as T
    // }

    // // unit = definition* ;
    // unit(target: SPPTBranch, children: SPPTBranch[], arg: any): SimpleExampleUnit {
    //     let result: SimpleExampleUnit;
    //     let definitions = children[0].branchNonSkipChildren.map(it =>
    //         child => this.transform<Definition>(it, arg)
    //     );
    //     result.definition.push(definitions);
    //     return result;
    // }
    //
    // // definition = classDefinition ;
    // definition(target: SPPTBranch, children: SPPTBranch[], arg: any): Definition {
    //     return this.transform(children[0], arg)
    // }
    //
    // // classDefinition =
    // //                'class' NAME '{'
    // //                    propertyDefinition*
    // //                    methodDefinition*
    // //                '}'
    // //            ;
    // classDefinition(target: SPPTBranch, children: SPPTBranch[], arg: any): ClassDefinition {
    //     let name = children[0].nonSkipMatchedText
    //     let propertyDefinitionList = children[1].branchNonSkipChildren.map (it =>
    //         this.transform<PropertyDefinition>(it, arg)
    //     );
    //     let methodDefinitionList = children[2].branchNonSkipChildren.map (it =>
    //         this.transform<MethodDefinition>(it, arg)
    //     );
    //     let classDefinition = new ClassDefinition(name);
    //     classDefinition.properties.push(propertyDefinitionList);
    //     classDefinition.methods.push(methodDefinitionList);
    //     return classDefinition;
    // }
    //
    // //propertyDefinition = NAME ':' NAME ;
    // propertyDefinition(target: SPPTBranch, children: SPPTBranch[], arg: any): PropertyDefinition {
    //     let name = children[0].nonSkipMatchedText;
    //     let typeName = children[1].nonSkipMatchedText;
    //     return new PropertyDefinition(name, typeName);
    // }
    //
    // //methodDefinition = NAME '(' parameterList ')' body ;
    // //parameterList = [ parameterDefinition / ',']* ;
    // methodDefinition(target: SPPTBranch, children: SPPTBranch[], arg: any): MethodDefinition {
    //     let name = children[0].nonSkipMatchedText
    //     let paramList = children[1].branchNonSkipChildren[0].branchNonSkipChildren.map (it =>
    //         this.transform<ParameterDefinition>(it, arg)
    //     )
    //     let method = new MethodDefinition(name, paramList);
    //     // body!
    //     return method;
    // }
    //
    //
    // //parameterDefinition = NAME ':' NAME ;
    // parameterDefinition(target: SPPTBranch, children: SPPTBranch[], arg: any): ParameterDefinition {
    //     let name = children[0].nonSkipMatchedText;
    //     let typeName = children[1].nonSkipMatchedText;
    //     return new ParameterDefinition(name, typeName);
    // }
    //
    // //body = '{' statement* '}' ;
}
