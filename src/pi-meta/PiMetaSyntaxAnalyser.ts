import {net} from "net.akehurst.language-agl-processor";
import SyntaxAnalyser = net.akehurst.language.api.syntaxAnalyser.SyntaxAnalyser;
import SharedPackedParseTree = net.akehurst.language.api.sppt.SharedPackedParseTree;
import SPPTBranch = net.akehurst.language.api.sppt.SPPTBranch;
import SPPTLeaf = net.akehurst.language.api.sppt.SPPTLeaf;
import SPPTNode = net.akehurst.language.api.sppt.SPPTNode;


export class PiMetaSyntaxAnalyser implements SyntaxAnalyser {
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
        // if('ExModel' == brName) {
        //     return this.exmodel(branch)
        // } else if ('Entity' == brName) {
        //     return this.entity(branch)
        // } else if ('classDefinition' == brName) {
        //     return this.classDefinition(branch)
        // } else if ('propertyDefinition' == brName) {
        //     return this.propertyDefinition(branch)
        // } else if ('methodDefinition' == brName) {
        //     return this.methodDefinition(branch)
        // } else if ('parameterDefinition' == brName) {
        //     return this.parameterDefinition(branch)
        // } else {
        //     throw `Error: ${brName} not handled`;
        // }
    }

    private transformLeaf(leaf: SPPTLeaf, arg?: any): string {
        return leaf.matchedText;
    }



}
