###On Grammar
1. Is there a way to get a line number on SyntaxErrors in the Grammar (not in the sentences)?
2. How to comment-out parts of the grammar?  "//" or "/* - */"or both ???
3. Please, explain the difference in the grammar of things between double and single quotes.
4. Why is the following rule correct, without specifying anyChar:
   leaf stringLiteral       = ''' anyChar* ''';?
5. Why does the error "Could not match goal, at line 9 column 202, expected one of ['==']" occur on 
   "/sentences/SomeNameOrOther.exm"? Using the generated parser in ProjectIt no error occurs.
6. In the current generation of the grammar I take lots of care to handle lists, 
   let's discuss how this can be done simpler.
7. In the current generation of the grammar I take lots of care to handle references (all the ..PiElemRef rules), 
   let's discuss how this can be done simpler.
8. How to work with the multiple trees? 
9. Why does the error "Could not match goal, at line 41 column 9, expected one of ['"', stringLiteral, 'abs(', "[a-zA-Z_][a-zA-Z0-9_]*", 'sum', 'CALL', 'if', '(']
       " occur on "/sentences/LargeUnit.exm"?
10. How to define multiple options for a rule?
E.g.
    PiConcept = PiExpressionConcept 
    / PiLimitedConcept
    / PiNormalConcept

###On SyntaxAnalyser
1. Why do I not get the error `Error: ${brName} not handled` (SyntaxAnalyser.transformBranch) when I have not
   yet defined a function to transform a certain type of node?

