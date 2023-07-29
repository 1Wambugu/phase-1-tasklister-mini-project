document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const tasksList = document.getElementById("tasks");
    const prioritySelect = document.getElementById("priority");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value;
  
      // Get the selected priority from the dropdown
      const priorityValue = prioritySelect.value;
  
      const taskElement = document.createElement("li");
      taskElement.textContent = taskText;
  
      // Add a class based on the selected priority to change text color
      taskElement.classList.add(priorityValue);
  
      // Add a delete button to the task element
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        tasksList.removeChild(taskElement);
      });
      taskElement.appendChild(deleteButton);
  
      tasksList.appendChild(taskElement);
  
      taskInput.value = "";
    });
  });
  