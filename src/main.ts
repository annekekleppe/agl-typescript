// use this import statement to switch between the various examples
import {ParserUsingAGL} from "./pi-meta/ParserUsingAGL";

const main = new ParserUsingAGL();
try {
    main.doIt();
} catch (e) {
    console.log(e.message);
}
