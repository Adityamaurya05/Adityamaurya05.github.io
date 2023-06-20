window.addEventListener('load', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', function() {
      const taskText = taskInput.value;
      if (taskText.trim() !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function(e) {
      const target = e.target;
      if (target.classList.contains('markButton')) {
        const listItem = target.parentNode.parentNode;
        listItem.classList.toggle('done');
      } else if (target.classList.contains('removeButton')) {
        const listItem = target.parentNode.parentNode;
        taskList.removeChild(listItem);
      }
    });
  
    function addTask(text) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="taskText">${text}</span>
        <div class="taskButtons">
          <button class="markButton">Done</button>
          <button class="removeButton">Remove</button>
        </div>
      `;
      taskList.appendChild(listItem);
    }
  });
 