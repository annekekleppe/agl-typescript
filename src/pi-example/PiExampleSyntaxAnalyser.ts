import {net} from "net.akehurst.language-agl-processor";
import SyntaxAnalyser = net.akehurst.language.api.syntaxAnalyser.SyntaxAnalyser;
import SharedPackedParseTree = net.akehurst.language.api.sppt.SharedPackedParseTree;
import SPPTBranch = net.akehurst.language.api.sppt.SPPTBranch;
import SPPTLeaf = net.akehurst.language.api.sppt.SPPTLeaf;
import SPPTNode = net.akehurst.language.api.sppt.SPPTNode;

import {
    Attribute,
    Entity, ExampleEveryConcept,
    ExModel, Method, Type
} from "./language/gen";
import {ExampleModelUnitWriter} from "./writer/gen/ExampleModelUnitWriter";
import {PiElementReference} from "./language/gen/PiElementReference";

export class PiExampleSyntaxAnalyser implements SyntaxAnalyser {
    writer: ExampleModelUnitWriter = new ExampleModelUnitWriter();

    locationMap: any;

    clear(): void {
        throw new Error("Method not implemented.");
    }

    transform<T>(sppt: SharedPackedParseTree): T {
        if (!!sppt.root) {
            return this.transformNode(sppt.root) as unknown as T;
        } else {
            return null;
        }
    }

    private transformNode(node: SPPTNode): any {
        // console.log(`transformNode: ${node.name}`)
        if (node.isLeaf) {
            return this.transformLeaf(node as SPPTLeaf);
        } else if (node.isBranch) {
            return this.transformBranch(node as SPPTBranch);
        }
    }

    private transformBranch(branch: SPPTBranch): any {
        var brName = branch.name;
        if ('ExModel' == brName) {
            return this.exmodel(branch);
        } else if ('Entity' == brName) {
            return this.entity(branch);
        } else if ('Attribute' == brName) {
            return this.attribute(branch);
        } else if ('Method' == brName) {
            return this.method(branch);
        } else if ('OptionalBaseEntity' == brName) {
            return this.optionalBaseEntity(branch);
        } else if ('EntityPiElemRef' == brName) {
            return this.entityPiElemRef(branch);
        } else {
            throw `Error: ${brName} not handled`;
        }
    }

    private transformLeaf(leaf: SPPTLeaf, arg?: any): string {
        return leaf.matchedText;
    }

    // ExModel = 'model' variable '{'
    // Entity*
    // 'model' 'wide' 'Methods:'
    // Method*
    // '}' ;
    exmodel(branch: SPPTBranch): ExModel {
        // console.log(`executing exmodel`);
        let result: ExModel = new ExModel();
        // variable
        result.name = this.variableName(branch.nonSkipChildren.toArray()[1]);
        // Entity*
        result.entities.push(...this.transformEntityList(branch.nonSkipChildren.toArray()[3]));
        // Method*
        result.methods.push(...this.transformMethodList(branch.nonSkipChildren.toArray()[7]));
        return result;
    }

    transformEntityList(entityList: SPPTBranch) : Entity[] {
        // console.log(`executing entity list`);
        let result: Entity[] = [];
        for (const child of entityList.nonSkipChildren.toArray()) {
            try {
                let ent = this.transformNode(child);
                if (ent) result.push(ent);
            } catch (e) {
                console.log(`entity list ERROR: ${e.message}`);
            }
        }
        return result;
    }

    transformMethodList(methodList: SPPTBranch) : Method[] {
        // console.log(`executing method list`);
        let result: Method[] = [];
        for (const child of methodList.nonSkipChildren.toArray()) {
            try {
                let ent = this.transformNode(child);
                if (ent) result.push(ent);
            } catch (e) {
                console.log(`method list ERROR: ${e.message}`);
            }
        }
        return result;
    }

    transformAttributeList(attributeList: SPPTBranch) : Attribute[] {
        // console.log(`executing attribute list`);
        let result: Attribute[] = [];
        for (const child of attributeList.nonSkipChildren.toArray()) {
            try {
                let element = this.transformNode(child);
                if (element) result.push(element);
            } catch (e) {
                console.log(`attribute list ERROR: ${e.message}`);
            }
        }
        return result;
    }

    // Entity = 'Entity' variable OptionalBaseEntity? '{'
    // Attribute*
    // Method*
    // '}' ;
    entity(branch: SPPTBranch): Entity {
        console.log(`executing entity`);
        let result: Entity = new Entity();
        // variable
        result.name = this.variableName(branch.nonSkipChildren.toArray()[1]);
        // OptionalBaseEntity?
        result.baseEntity = this.optionalBaseEntity(branch.nonSkipChildren.toArray()[2]);
        // Attribute*
        result.attributes.push(...this.transformAttributeList(branch.nonSkipChildren.toArray()[4]));
        // Method*
        result.methods.push(...this.transformMethodList(branch.nonSkipChildren.toArray()[5]));
        return result;
    }

    // OptionalBaseEntity = 'base' EntityPiElemRef ;
    optionalBaseEntity(branch: SPPTBranch): PiElementReference<Entity> {
        console.log(`executing optionalBaseEntity: ` + branch.matchedText);
        if (!branch.isEmptyMatch) {
            // TODO ask David why the second nonSkipChildren is needed
            return this.entityPiElemRef(branch.nonSkipChildren.toArray()[0].nonSkipChildren.toArray()[1]);
        } else {
            return null;
        }
    }

    // Attribute = variable ':' TypePiElemRef;
    attribute(branch: SPPTBranch): Attribute {
        // console.log(`executing attribute`);
        let result = new Attribute();
        result.name = this.variableName(branch.nonSkipChildren.toArray()[0]);
        result.declaredType = this.typePiElemRef(branch.nonSkipChildren.toArray()[2]);
        return result;
    }

    // Method = 'method' variable '(' [Parameter / ',']* '):' TypePiElemRef '{'
    // ExExpression
    // '}' ;
    method(branch: SPPTBranch): Method {
        // console.log(`executing method`);
        let result = new Method();
        result.name = this.variableName(branch.nonSkipChildren.toArray()[1]);
        result.declaredType = this.typePiElemRef(branch.nonSkipChildren.toArray()[5]);
        return result;
    }

    // TypePiElemRef = variable;
    private typePiElemRef(branch: SPPTBranch) : PiElementReference<Type> {
        let declaredType: string = this.variableName(branch.nonSkipChildren.toArray()[0]);
        return PiElementReference.create<Type>(declaredType, "Type");
    }

    // EntityPiElemRef = variable;
    private entityPiElemRef(branch: SPPTBranch): PiElementReference<Entity> {
        let declaredType: string = this.variableName(branch.nonSkipChildren.toArray()[0]);
        return PiElementReference.create<Entity>(declaredType, "Entity");
    }

    private variableName(param: SPPTNode): string {
        const name = param.matchedText;
        if (name) {
            return name;
        } else {
            return "<noNameFound>";
        }
    }
}
