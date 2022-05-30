import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import { initialdomManip } from './initial-dom-manip.js'

// Call blankProjectLoad on first land
blankProjectLoad();

// Call DOM Manipulation module to control UI
initialdomManip();

// TODO: click event module HERE for todo and project creations

// Call create-to-do.js module file and apply some objects/properties (this will eventually be replaced by UI input)
const myToDo = createToDo("Grocery Run", "Go get groceries", "6/15/2022", "Low", "Meat, Eggs, Milk");
const myToDo2 = createToDo("Homework", "Do Odin Project Work", "6/20/2022", "Medium", "Read Module, Do ToDo Project");
console.log("Show me properties on myToDo from index.js.....", myToDo);
console.log("Show me properties on myToDo2 from index.js.....", myToDo2);