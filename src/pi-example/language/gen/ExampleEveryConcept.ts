// Generated by the ProjectIt Language Generator.
import {
    AbsExpression,
    AndExpression,
    AppliedFeature,
    Attribute,
    AttributeRef,
    AttributeType,
    BaseType,
    BinaryExpression,
    BooleanLiteralExpression,
    ComparisonExpression,
    Demo,
    DivideExpression,
    Entity,
    EqualsExpression,
    ExExpression,
    ExModel,
    GreaterThenExpression,
    IfExpression,
    LessThenExpression,
    LiteralExpression,
    LoopVariable,
    LoopVariableRef,
    Method,
    MethodCallExpression,
    MultiplyExpression,
    NumberLiteralExpression,
    OrExpression,
    Parameter,
    ParameterRef,
    PlusExpression,
    StringLiteralExpression,
    SumExpression,
    Type
} from "./internal";

/**
 * Type ExampleEveryConcept is a union of all concepts and interfaces that are defined for language Example.
 * This type is used instead of the more general PiElement interface or the MobxModelElementImpl class,
 * or even the type Object, to ensure that parts of the language environment work on the same set
 * of instances.
 */
export type ExampleEveryConcept =
    | AbsExpression
    | AndExpression
    | AppliedFeature
    | Attribute
    | AttributeRef
    | AttributeType
    | BaseType
    | BinaryExpression
    | BooleanLiteralExpression
    | ComparisonExpression
    | Demo
    | DivideExpression
    | Entity
    | EqualsExpression
    | ExExpression
    | ExModel
    | GreaterThenExpression
    | IfExpression
    | LessThenExpression
    | LiteralExpression
    | LoopVariable
    | LoopVariableRef
    | Method
    | MethodCallExpression
    | MultiplyExpression
    | NumberLiteralExpression
    | OrExpression
    | Parameter
    | ParameterRef
    | PlusExpression
    | StringLiteralExpression
    | SumExpression
    | Type;

/**
 * Type MODELUNIT combines the metatype of all possible modelunits of language Example
 */
export type ExampleModelUnitType = ExModel;
