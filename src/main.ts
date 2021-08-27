// use this import statement to switch between the various examples
import {ParserUsingAGL} from "./pi-example/ParserUsingAGL";

const main = new ParserUsingAGL();
try {
    main.doIt();
} catch (e) {
    console.log("main: " + e.message);
}
