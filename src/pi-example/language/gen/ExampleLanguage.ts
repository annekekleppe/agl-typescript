// Generated by the ProjectIt Language Generator.
import { Language, Property, Concept, Interface } from "@projectit/core";

import {
    Demo,
    ExModel,
    Entity,
    Method,
    Attribute,
    AttributeType,
    Parameter,
    ExExpression,
    LiteralExpression,
    StringLiteralExpression,
    NumberLiteralExpression,
    BooleanLiteralExpression,
    AbsExpression,
    AppliedFeature,
    AttributeRef,
    ParameterRef,
    LoopVariable,
    LoopVariableRef,
    SumExpression,
    MethodCallExpression,
    IfExpression,
    BinaryExpression,
    MultiplyExpression,
    PlusExpression,
    DivideExpression,
    AndExpression,
    OrExpression,
    ComparisonExpression,
    LessThenExpression,
    GreaterThenExpression,
    EqualsExpression,
    PiElementReference
} from "./internal";

/**
 * Creates an in-memory representation of structure of the language metamodel, used in e.g. the (de)serializer.
 */
export function initializeLanguage() {
    Language.getInstance().addConcept(describeDemo());
    Language.getInstance().addConcept(describeExModel());
    Language.getInstance().addConcept(describeEntity());
    Language.getInstance().addConcept(describeMethod());
    Language.getInstance().addConcept(describeAttribute());
    Language.getInstance().addConcept(describeAttributeType());
    Language.getInstance().addConcept(describeParameter());
    Language.getInstance().addConcept(describeExExpression());
    Language.getInstance().addConcept(describeLiteralExpression());
    Language.getInstance().addConcept(describeStringLiteralExpression());
    Language.getInstance().addConcept(describeNumberLiteralExpression());
    Language.getInstance().addConcept(describeBooleanLiteralExpression());
    Language.getInstance().addConcept(describeAbsExpression());
    Language.getInstance().addConcept(describeAppliedFeature());
    Language.getInstance().addConcept(describeAttributeRef());
    Language.getInstance().addConcept(describeParameterRef());
    Language.getInstance().addConcept(describeLoopVariable());
    Language.getInstance().addConcept(describeLoopVariableRef());
    Language.getInstance().addConcept(describeSumExpression());
    Language.getInstance().addConcept(describeMethodCallExpression());
    Language.getInstance().addConcept(describeIfExpression());
    Language.getInstance().addConcept(describeBinaryExpression());
    Language.getInstance().addConcept(describeMultiplyExpression());
    Language.getInstance().addConcept(describePlusExpression());
    Language.getInstance().addConcept(describeDivideExpression());
    Language.getInstance().addConcept(describeAndExpression());
    Language.getInstance().addConcept(describeOrExpression());
    Language.getInstance().addConcept(describeComparisonExpression());
    Language.getInstance().addConcept(describeLessThenExpression());
    Language.getInstance().addConcept(describeGreaterThenExpression());
    Language.getInstance().addConcept(describeEqualsExpression());
    Language.getInstance().addInterface(describeBaseType());
    Language.getInstance().addInterface(describeType());
    Language.getInstance().addReferenceCreator((name: string, type: string) => {
        return !!name ? PiElementReference.create(name, type) : null;
    });
}

function describeDemo(): Concept {
    const concept = {
        typeName: "Demo",
        isModel: true,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new Demo();
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: []
    };
    concept.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: false,
        propertyType: "primitive"
    });
    concept.properties.set("models", {
        name: "models",
        type: "ExModel",
        isList: true,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeExModel(): Concept {
    const concept = {
        typeName: "ExModel",
        isModel: false,
        isUnit: true,
        isAbstract: false,
        isPublic: true,
        constructor: () => {
            return new ExModel();
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: []
    };
    concept.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: true,
        propertyType: "primitive"
    });
    concept.properties.set("entities", {
        name: "entities",
        type: "Entity",
        isList: true,
        isPublic: true,
        propertyType: "part"
    });
    concept.properties.set("methods", {
        name: "methods",
        type: "Method",
        isList: true,
        isPublic: true,
        propertyType: "part"
    });

    return concept;
}

function describeEntity(): Concept {
    const concept = {
        typeName: "Entity",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: true,
        constructor: () => {
            return new Entity();
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: []
    };
    concept.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: true,
        propertyType: "primitive"
    });
    concept.properties.set("attributes", {
        name: "attributes",
        type: "Attribute",
        isList: true,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("methods", {
        name: "methods",
        type: "Method",
        isList: true,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("baseEntity", {
        name: "baseEntity",
        type: "Entity",
        isList: false,
        isPublic: false,
        propertyType: "reference"
    });
    return concept;
}

function describeMethod(): Concept {
    const concept = {
        typeName: "Method",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: true,
        constructor: () => {
            return new Method();
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: []
    };
    concept.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: true,
        propertyType: "primitive"
    });
    concept.properties.set("body", {
        name: "body",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("parameters", {
        name: "parameters",
        type: "Parameter",
        isList: true,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("declaredType", {
        name: "declaredType",
        type: "Type",
        isList: false,
        isPublic: false,
        propertyType: "reference"
    });
    return concept;
}

function describeAttribute(): Concept {
    const concept = {
        typeName: "Attribute",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new Attribute();
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: []
    };
    concept.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: false,
        propertyType: "primitive"
    });

    concept.properties.set("declaredType", {
        name: "declaredType",
        type: "Type",
        isList: false,
        isPublic: false,
        propertyType: "reference"
    });
    return concept;
}

function describeAttributeType(): Concept {
    const concept = {
        typeName: "AttributeType",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new AttributeType();
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: []
    };
    concept.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: false,
        propertyType: "primitive"
    });
    concept.properties.set("extra", {
        name: "extra",
        type: "number",
        isList: false,
        isPublic: false,
        propertyType: "primitive"
    });

    return concept;
}

function describeParameter(): Concept {
    const concept = {
        typeName: "Parameter",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new Parameter();
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: []
    };
    concept.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: false,
        propertyType: "primitive"
    });

    concept.properties.set("declaredType", {
        name: "declaredType",
        type: "Type",
        isList: false,
        isPublic: false,
        propertyType: "reference"
    });
    return concept;
}

function describeExExpression(): Concept {
    const concept = {
        typeName: "ExExpression",
        isModel: false,
        isUnit: false,
        isAbstract: true,
        isPublic: false,
        constructor: () => {
            return null;
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: [
            "LiteralExpression",
            "StringLiteralExpression",
            "NumberLiteralExpression",
            "BooleanLiteralExpression",
            "AbsExpression",
            "ParameterRef",
            "LoopVariableRef",
            "SumExpression",
            "MethodCallExpression",
            "IfExpression",
            "BinaryExpression",
            "MultiplyExpression",
            "PlusExpression",
            "DivideExpression",
            "AndExpression",
            "OrExpression",
            "ComparisonExpression",
            "LessThenExpression",
            "GreaterThenExpression",
            "EqualsExpression"
        ]
    };

    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeLiteralExpression(): Concept {
    const concept = {
        typeName: "LiteralExpression",
        isModel: false,
        isUnit: false,
        isAbstract: true,
        isPublic: false,
        constructor: () => {
            return null;
        },
        properties: new Map<string, Property>(),
        baseName: "ExExpression",
        subConceptNames: ["StringLiteralExpression", "NumberLiteralExpression", "BooleanLiteralExpression"]
    };

    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeStringLiteralExpression(): Concept {
    const concept = {
        typeName: "StringLiteralExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new StringLiteralExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "LiteralExpression",
        subConceptNames: []
    };
    concept.properties.set("value", {
        name: "value",
        type: "string",
        isList: false,
        isPublic: false,
        propertyType: "primitive"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeNumberLiteralExpression(): Concept {
    const concept = {
        typeName: "NumberLiteralExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new NumberLiteralExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "LiteralExpression",
        subConceptNames: []
    };
    concept.properties.set("value", {
        name: "value",
        type: "string",
        isList: false,
        isPublic: false,
        propertyType: "primitive"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeBooleanLiteralExpression(): Concept {
    const concept = {
        typeName: "BooleanLiteralExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new BooleanLiteralExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "LiteralExpression",
        subConceptNames: []
    };
    concept.properties.set("value", {
        name: "value",
        type: "string",
        isList: false,
        isPublic: false,
        propertyType: "primitive"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeAbsExpression(): Concept {
    const concept = {
        typeName: "AbsExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new AbsExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "ExExpression",
        subConceptNames: []
    };

    concept.properties.set("expr", {
        name: "expr",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeAppliedFeature(): Concept {
    const concept = {
        typeName: "AppliedFeature",
        isModel: false,
        isUnit: false,
        isAbstract: true,
        isPublic: false,
        constructor: () => {
            return null;
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: ["AttributeRef"]
    };

    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeAttributeRef(): Concept {
    const concept = {
        typeName: "AttributeRef",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new AttributeRef();
        },
        properties: new Map<string, Property>(),
        baseName: "AppliedFeature",
        subConceptNames: []
    };

    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("attribute", {
        name: "attribute",
        type: "Attribute",
        isList: false,
        isPublic: false,
        propertyType: "reference"
    });
    return concept;
}

function describeParameterRef(): Concept {
    const concept = {
        typeName: "ParameterRef",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new ParameterRef();
        },
        properties: new Map<string, Property>(),
        baseName: "ExExpression",
        subConceptNames: []
    };

    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("parameter", {
        name: "parameter",
        type: "Parameter",
        isList: false,
        isPublic: false,
        propertyType: "reference"
    });
    return concept;
}

function describeLoopVariable(): Concept {
    const concept = {
        typeName: "LoopVariable",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new LoopVariable();
        },
        properties: new Map<string, Property>(),
        baseName: null,
        subConceptNames: []
    };
    concept.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: false,
        propertyType: "primitive"
    });

    return concept;
}

function describeLoopVariableRef(): Concept {
    const concept = {
        typeName: "LoopVariableRef",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new LoopVariableRef();
        },
        properties: new Map<string, Property>(),
        baseName: "ExExpression",
        subConceptNames: []
    };

    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("variable", {
        name: "variable",
        type: "LoopVariable",
        isList: false,
        isPublic: false,
        propertyType: "reference"
    });
    return concept;
}

function describeSumExpression(): Concept {
    const concept = {
        typeName: "SumExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new SumExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "ExExpression",
        subConceptNames: []
    };

    concept.properties.set("variable", {
        name: "variable",
        type: "LoopVariable",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("from", {
        name: "from",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("to", {
        name: "to",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("body", {
        name: "body",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeMethodCallExpression(): Concept {
    const concept = {
        typeName: "MethodCallExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new MethodCallExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "ExExpression",
        subConceptNames: []
    };

    concept.properties.set("args", {
        name: "args",
        type: "ExExpression",
        isList: true,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("methodDefinition", {
        name: "methodDefinition",
        type: "Method",
        isList: false,
        isPublic: false,
        propertyType: "reference"
    });
    return concept;
}

function describeIfExpression(): Concept {
    const concept = {
        typeName: "IfExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new IfExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "ExExpression",
        subConceptNames: []
    };

    concept.properties.set("condition", {
        name: "condition",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("whenTrue", {
        name: "whenTrue",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("whenFalse", {
        name: "whenFalse",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeBinaryExpression(): Concept {
    const concept = {
        typeName: "BinaryExpression",
        isModel: false,
        isUnit: false,
        isAbstract: true,
        isPublic: false,
        constructor: () => {
            return null;
        },
        properties: new Map<string, Property>(),
        baseName: "ExExpression",
        subConceptNames: [
            "MultiplyExpression",
            "PlusExpression",
            "DivideExpression",
            "AndExpression",
            "OrExpression",
            "ComparisonExpression",
            "LessThenExpression",
            "GreaterThenExpression",
            "EqualsExpression"
        ]
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeMultiplyExpression(): Concept {
    const concept = {
        typeName: "MultiplyExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new MultiplyExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "BinaryExpression",
        subConceptNames: []
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describePlusExpression(): Concept {
    const concept = {
        typeName: "PlusExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new PlusExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "BinaryExpression",
        subConceptNames: []
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeDivideExpression(): Concept {
    const concept = {
        typeName: "DivideExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new DivideExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "BinaryExpression",
        subConceptNames: []
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeAndExpression(): Concept {
    const concept = {
        typeName: "AndExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new AndExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "BinaryExpression",
        subConceptNames: []
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeOrExpression(): Concept {
    const concept = {
        typeName: "OrExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new OrExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "BinaryExpression",
        subConceptNames: []
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeComparisonExpression(): Concept {
    const concept = {
        typeName: "ComparisonExpression",
        isModel: false,
        isUnit: false,
        isAbstract: true,
        isPublic: false,
        constructor: () => {
            return null;
        },
        properties: new Map<string, Property>(),
        baseName: "BinaryExpression",
        subConceptNames: ["LessThenExpression", "GreaterThenExpression", "EqualsExpression"]
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeLessThenExpression(): Concept {
    const concept = {
        typeName: "LessThenExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new LessThenExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "ComparisonExpression",
        subConceptNames: []
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeGreaterThenExpression(): Concept {
    const concept = {
        typeName: "GreaterThenExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new GreaterThenExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "ComparisonExpression",
        subConceptNames: []
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeEqualsExpression(): Concept {
    const concept = {
        typeName: "EqualsExpression",
        isModel: false,
        isUnit: false,
        isAbstract: false,
        isPublic: false,
        constructor: () => {
            return new EqualsExpression();
        },
        properties: new Map<string, Property>(),
        baseName: "ComparisonExpression",
        subConceptNames: []
    };

    concept.properties.set("left", {
        name: "left",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("right", {
        name: "right",
        type: "ExExpression",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });
    concept.properties.set("appliedfeature", {
        name: "appliedfeature",
        type: "AppliedFeature",
        isList: false,
        isPublic: false,
        propertyType: "part"
    });

    return concept;
}

function describeBaseType(): Interface {
    const intface = {
        typeName: "BaseType",
        isPublic: false,
        properties: new Map<string, Property>(),
        subConceptNames: ["Entity", "AttributeType"]
    };
    intface.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: true,
        propertyType: "primitive"
    });

    return intface;
}

function describeType(): Interface {
    const intface = {
        typeName: "Type",
        isPublic: false,
        properties: new Map<string, Property>(),
        subConceptNames: ["Entity", "AttributeType"]
    };
    intface.properties.set("name", {
        name: "name",
        type: "string",
        isList: false,
        isPublic: true,
        propertyType: "primitive"
    });

    return intface;
}
