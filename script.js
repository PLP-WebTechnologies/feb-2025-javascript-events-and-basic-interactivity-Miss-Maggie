
const form = document.getElementById('sign-upForm');
form.addEventListener('input', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email.includes('@')) {
        feedback.textContent = 'Email format is correct';
    } else {
        feedback.textContent = 'Invalid email format';
    }
    
    if (password.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters';
    }
});

form.addEventListener('submitButton', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  //Create the list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

   //Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-check");
    checkbox.addEventListener("change", () => {
    listItem.classList.toggle("completed");
   });

   // Create task text span
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });
  
    // Assemble everything
    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(listItem);
    taskInput.value = "";
}