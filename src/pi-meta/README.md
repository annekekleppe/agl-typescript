# This folder contains the language for defining projections from ProjectIt meta

## Subfolders

* grammars contains a file taken from meta/editDef, transformed into AGL format
* sentences contains some example models/sentences in the PiEditDef language

## Other notes

The Parser in ParserUsingAGL can be started through main.ts (in ./src). Simply change the import
from simple-example to pi-example.

The FileHandler class (in ./src) takes care of opening the file with the sentence/model.

The GrammarHandler class (in ./src) takes care of reading the grammar from one of the 
files in [grammars].
