// Generated by the ProjectIt Language Generator.
import { model, PiBinaryExpression, PiUtils } from "@projectit/core";
import { BinaryExpression, ExampleMetaType, ExExpression } from "./internal";

/**
 * Class OrExpression is the implementation of the binary expression concept with the same name in the language definition file.
 * It uses mobx decorators to enable parts of the language environment, e.g. the editor, to react
 * to changes in the state of its properties.
 */
@model
export class OrExpression extends BinaryExpression implements PiBinaryExpression {
    /**
     * A convenience method that creates an instance of this class
     * based on the properties defined in 'data'.
     * @param data
     */
    static create(data: Partial<OrExpression>): OrExpression {
        const result = new OrExpression();
        if (!!data.left) {
            result.left = data.left;
        }
        if (!!data.right) {
            result.right = data.right;
        }
        if (!!data.appliedfeature) {
            result.appliedfeature = data.appliedfeature;
        }
        return result;
    }

    readonly $typename: ExampleMetaType = "OrExpression"; // holds the metatype in the form of a string

    constructor(id?: string) {
        super(id);
    }

    /**
     * Returns the metatype of this instance in the form of a string.
     */
    piLanguageConcept(): ExampleMetaType {
        return this.$typename;
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
        return true;
    }

    /**
     * Returns true if this instance is a binary expression concept.
     */
    piIsBinaryExpression(): boolean {
        return true;
    }

    /**
     * Returns the priority of this expression instance.
     * Used to balance the expression tree.
     */
    piPriority(): number {
        return 1;
    }

    /**
     * Returns the left element of this binary expression.
     */
    public piLeft(): ExExpression {
        return this.left;
    }

    /**
     * Returns the right element of this binary expression.
     */
    public piRight(): ExExpression {
        return this.right;
    }

    /**
     * Sets the left element of this binary expression.
     */
    public piSetLeft(value: ExExpression): void {
        this.left = value;
    }

    /**
     * Sets the right element of this binary expression.
     */
    public piSetRight(value: ExExpression): void {
        this.right = value;
    }
}