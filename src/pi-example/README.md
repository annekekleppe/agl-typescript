# This folder contains an example taken from ProjectIt playground called 'Example'.

## Subfolders

* grammars contains a file taken from Example and transformed into AGL format
* language contains the classes/types needed for the AST/ASM
* sentences contains some example models/sentences in the Example language
* writer contains a class that unparses any instance of classes in language into a string

## Other notes

The Parser in ParserUsingAGL can be started through main.ts (in ./src). Simply change the import
from simple-example to pi-example.

The FileHandler class (in ./src) takes care of opening the file with the sentence/model.

The GrammarHandler class (in ./src) takes care of reading the grammar from one of the files in [grammars].
