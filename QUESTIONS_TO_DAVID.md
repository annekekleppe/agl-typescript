###On Grammar
-. Is there a way to get a line number on SyntaxErrors in the Grammar (not in the sentences)?
-. How to comment-out parts of the grammar?  "//" or "/* - */"or both ???
-. Please, explain the difference in the grammar of things between double and single quotes.
Double => regular expression, Single => literal 
-. Why is the following rule correct, without specifying anyChar:
   leaf stringLiteral       = ''' anyChar* ''';? ==> '\''
-. Why does the error "Could not match goal, at line 9 column 202, expected one of ['==']" occur on 
   "/sentences/SomeNameOrOther.exm"? Using the generated parser in ProjectIt no error occurs.
-. In the current generation of the grammar I take lots of care to handle lists, 
   let's discuss how this can be done simpler.
-. In the current generation of the grammar I take lots of care to handle references (all the ..PiElemRef rules), 
   let's discuss how this can be done simpler.
-. How to work with the multiple trees? => childrenAlternatives: Set of Lists
-. Why does the error "Could not match goal, at line 41 column 9, expected one of ['"', stringLiteral, 'abs(', "[a-zA-Z_][a-zA-Z0-9_]*", 'sum', 'CALL', 'if', '(']
       " occur on "/sentences/LargeUnit.exm"?
-. What is the 'namespace' variable at the start of the grammar? => has to do with combining grammars
-. When skipping whitespace, is there a possibility to require whitespace, eg. "abstract root concept" instead of
"abstractroot concept", or "abstract rootconcept". => add Whitespace to the rule
    
###On SyntaxAnalyser
1. Why do I not get the error `Error: ${brName} not handled` (SyntaxAnalyser.transformBranch) when I have not
   yet defined a function to transform a certain type of node?

