// Create three variables that hold references to the input, button, and list elements using const.
const inputArea = document.querySelector("#favchap");
const inputButton = document.querySelector("main button");
const itemsList = document.querySelector("#list");

// Add Chapter function
function addChapter() {
    // make sure the input is not blank before doing the following remaining tasks in this list
    if (inputArea.value != "") {
        if (itemsList.querySelectorAll("li").length == 10)
        {
            inputArea.value = "Max Items!"
            inputArea.placeholder = "Maximum reached..."
        }
        else
        {
            // create an li element
            var newListElement = document.createElement("li");
        
            // create a delete button
            var deleteButton = document.createElement("button");
        
            // populate the li elements textContent or innerHTML with the input
            newListElement.innerHTML = inputArea.value;
        
            // populate the button textContent with an ❌
            deleteButton.textContent = "❌";
        
            // append the li element with the delete button
            newListElement.appendChild(deleteButton);
        
            // append the list element with the li element just created and appended with text and the delete button
            itemsList.appendChild(newListElement);
        
            // add an event listener to the delete button that removes the li element when clicked
            deleteButton.addEventListener("click", () =>{
                inputArea.placeholder = "i.e. Alma 5"
                newListElement.remove();
            });
        
            // send the focus to the input element
            inputArea.focus();
        
            // change the input value to nothing or the empty string to clean up the interface for the user
            inputArea.value = "";
        }
    }
}

// Create an click event listener for the Add Chapter button using addEventListener. 
inputButton.addEventListener("click", addChapter);

// Event listener for pressing "Enter" instead of clicking the button.
inputArea.addEventListener('keydown', () => {
    // Get code.
    var code = event.code;
    if (code == "Enter")
    {
        addChapter(event.target);
    }
}, false);