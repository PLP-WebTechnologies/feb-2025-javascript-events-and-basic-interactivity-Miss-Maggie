document.getElementById('addTaskButton').addEventListener('click', () => {
    const newTask = document.createTask('p');
    newTask.textContent = 'You have added a new Task!';
    newTaskContainer.appendChild(newTask);
});
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