import { blankProjectLoad } from "./blank-project-load.js";

// DOM manipulation to display the UI components
export function displayDefaultProject() {

    // DOM for the default project load
    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";
}

export function addItemToCheckList() {
    const addItem = document.getElementById("add-to-checklist").value;
    
    // Run check to see if the input box is empty and button was clicked
    // If so, return out of this function gracefully - do nothing
    // If not, apply contents to new li in DOM
    if (addItem !== "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";

        // DOM check for existing check list items already present
        if (document.querySelectorAll("li").length > 0) {
            console.log("INSIDE MODULE IF....,", document.querySelectorAll("li").length);
            const nodeListCheckList = document.querySelectorAll("li");
            console.log(nodeListCheckList);
            
            // DOM to bind click event to each node in nodelist and remove node if clicked
            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist() {
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm() {
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}

export function displayToDo() {

    // Check and clear current display DOM, if any
    const removeDivs = document.querySelectorAll(".card");
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    // Create the display card for the display DOM
    console.log("display to screen");
    const projects = document.querySelector(".projects");
    const card = document.createElement("div");
    card.classList.add("card");
    projects.appendChild(card);

    // Gather data from local backend storage and initialize
    let Title = localStorage.getItem("Title");
    let Description = localStorage.getItem("Description");
    let DueDate = localStorage.getItem("DueDate");
    let Priority = localStorage.getItem("Priority");
    let CheckList = localStorage.getItem("CheckList");

    // Place data in local temp array and loop over key/value pairs and display to DOM
    let _displayArray = { Title, Description, DueDate, Priority, CheckList };
    console.log(_displayArray);

    for (let key in _displayArray) {
        console.log(`${key}: ${_displayArray[key]}`);
        const para = document.createElement("p");
        para.textContent = (`${key}: ${_displayArray[key]}`);
        card.appendChild(para);
    }
}