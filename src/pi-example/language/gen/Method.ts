// Generated by the ProjectIt Language Generator.
import { observable } from "mobx";
import { model, MobxModelElementImpl, observablelistpart, observablepart, PiNamedElement, PiUtils } from "@projectit/core";
import { ExExpression, Parameter, Type, ExampleMetaType, PiElementReference } from "./internal";

/**
 * Class Method is the implementation of the concept with the same name in the language definition file.
 * It uses mobx decorators to enable parts of the language environment, e.g. the editor, to react
 * to changes in the state of its properties.
 */
@model
export class Method extends MobxModelElementImpl implements PiNamedElement {
    /**
     * A convenience method that creates an instance of this class
     * based on the properties defined in 'data'.
     * @param data
     */
    static create(data: Partial<Method>): Method {
        const result = new Method();
        if (!!data.name) {
            result.name = data.name;
        }
        if (!!data.body) {
            result.body = data.body;
        }
        if (!!data.parameters) {
            data.parameters.forEach(x => result.parameters.push(x));
        }
        if (!!data.declaredType) {
            result.declaredType = data.declaredType;
        }
        return result;
    }

    readonly $typename: ExampleMetaType = "Method"; // holds the metatype in the form of a string
    $id: string; // a unique identifier
    @observable name: string = ""; // implementation of name
    body: ExExpression; // implementation of part 'body'
    parameters: Parameter[]; // implementation of part 'parameters'
    declaredType: PiElementReference<Type>; // implementation of reference 'declaredType'

    constructor(id?: string) {
        super();
        if (!!id) {
            this.$id = id;
        } else {
            this.$id = PiUtils.ID(); // uuid.v4();
        }
        // both 'observablepart' and 'observablelistpart' change the get and set of an attribute
        // such that the parent-part relationship is consistently maintained,
        // and make sure the part is observable
        observablepart(this, "body");
        observablelistpart(this, "parameters");
        observablepart(this, "declaredType");
    }

    /**
     * Returns the metatype of this instance in the form of a string.
     */
    piLanguageConcept(): ExampleMetaType {
        return this.$typename;
    }

    /**
     * Returns the unique identifier of this instance.
     */
    piId(): string {
        return this.$id;
    }

    /**
     * Returns true if this instance is a model concept.
     */
    piIsModel(): boolean {
        return false;
    }

    /**
     * Returns true if this instance is a model unit.
     */
    piIsUnit(): boolean {
        return false;
    }

    /**
     * Returns true if this instance is an expression concept.
     */
    piIsExpression(): boolean {
        return false;
    }

    /**
     * Returns true if this instance is a binary expression concept.
     */
    piIsBinaryExpression(): boolean {
        return false;
    }
}
