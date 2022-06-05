import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm } from './dom-manip.js'
import './style.css';


// Call blankProjectLoad on first land
blankProjectLoad();

// Call DOM Manipulation module to load default project
//displayDefaultProject();

// Click events module
let clickEventsModule = (function() {

    // Click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    // Click event for adding an item to the checklist on the form
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToCheckList);

    // Click event to clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    // Click event to submit a new todo form to project
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
    
})();

// Call create-to-do.js module file and apply some objects/properties (this will eventually be replaced by UI input)
// const myToDo = createToDo("Grocery Run", "Go get groceries", "6/15/2022", "Low", "Meat, Eggs, Milk");
// const myToDo2 = createToDo("Homework", "Do Odin Project Work", "6/20/2022", "Medium", "Read Module, Do ToDo Project");
// console.log("Show me properties on myToDo from index.js.....", myToDo);
// console.log("Show me properties on myToDo2 from index.js.....", myToDo2);