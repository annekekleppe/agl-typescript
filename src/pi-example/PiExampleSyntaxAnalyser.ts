import {net} from "net.akehurst.language-agl-processor";
import SyntaxAnalyser = net.akehurst.language.api.syntaxAnalyser.SyntaxAnalyser;
import SharedPackedParseTree = net.akehurst.language.api.sppt.SharedPackedParseTree;
import SPPTBranch = net.akehurst.language.api.sppt.SPPTBranch;
import SPPTLeaf = net.akehurst.language.api.sppt.SPPTLeaf;
import SPPTNode = net.akehurst.language.api.sppt.SPPTNode;

import {
    Entity,
    ExModel
} from "./language/gen";

export class PiExampleSyntaxAnalyser implements SyntaxAnalyser {
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
        console.log(`transformNode: ${node.name}`)
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
        console.log("Transfprm branch: " + brName)
        if('ExModel' == brName) {
            return this.exmodel(branch)
        } else if ('Entity' == brName) {
            return this.entity(branch)
        // } else if ('classDefinition' == brName) {
        //     return this.classDefinition(branch)
        // } else if ('propertyDefinition' == brName) {
        //     return this.propertyDefinition(branch)
        // } else if ('methodDefinition' == brName) {
        //     return this.methodDefinition(branch)
        // } else if ('parameterDefinition' == brName) {
        //     return this.parameterDefinition(branch)
        } else {
            throw `Error: ${brName} not handled`;
        }
    }

    private transformLeaf(leaf: SPPTLeaf, arg?: any): string {
        return leaf.matchedText;
    }

    // ExModel = 'model' variable '{'
    // (Entity)*
    // 'model' 'wide' 'Methods:'
    // MethodList2
    // '}' ;
    exmodel(branch: SPPTBranch): ExModel {
        console.log(`executing exmodel`);
        let result: ExModel = new ExModel();
        // variable
        const name = branch.nonSkipChildren.toArray()[1].matchedText;
        if (name) {
            result.name = name;
        } else {
            result.name = "<noNameFound>";
        }
        console.log("name: " + name);
        // (Entity)*
        // entities = this.transformEntities()
        // branch.children(0)
        for (const child of branch.nonSkipChildren.toArray()[3].branchNonSkipChildren.toArray()) {
            let ent = null;
            try {
                ent = this.transformNode(child);
            } catch (e) {
                console.log(`exmodel ERROR: ${e.message}`);
            }
            if (ent) result.entities.push(ent);
        }
        // MethodList2
        // const list = branch.branchNonSkipChildren.toArray()[2];
        // result.methods.push(this.transformNode(list));
        return result;
    }

    // Entity = 'Entity' variable ('base' EntityPiElemRef )? '{'
    // AttributeList3
    // MethodList4
    // '}' ;
    entity(branch: SPPTBranch): Entity {
        console.log(`executing entity`);
        let result: Entity = new Entity();
        // variable
        const name = branch.nonSkipChildren.toArray()[1].matchedText;
        if (name) {
            result.name = name;
        } else {
            result.name = "<noNameFound>";
        }
        return result;
    }

}
