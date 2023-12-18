// todo.js
export function initTodoApp() {
    console.log('initTodoApp called'); 
    const priorityImages = {
      low: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-green.png',
      medium: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-yellow.png',
      high: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-red.png',
    };
  
    const form = document.getElementById('todo');
    const todoPane = document.getElementById('todo-pane');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const titleInput = document.getElementById('title');
      const prioritySelect = document.getElementById('priority');
  
      const title = titleInput.value;
      const priority = prioritySelect.value;
  
      if (title) {
        const newTodo = createTodo(title, priority);
        todoPane.appendChild(newTodo);
        titleInput.value = '';
      }
    });
  
    function createTodo(title, priority) {
        console.log('Creating todo:', title, priority);
      const listItem = document.createElement('li');
      listItem.className = 'todo';
      const img = document.createElement('img');
      img.src = priorityImages[priority];
      listItem.appendChild(img);
      listItem.appendChild(document.createTextNode(title));
      listItem.addEventListener('click', () => listItem.remove());
      return listItem;
    }
  }
  