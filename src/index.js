
  const form2 = document.querySelector('form');
  const textField = document.getElementById('new-task-description');
  const taskList2 = document.getElementById('tasks');
  const selector = document.querySelector('select');
  const totalList = [];
  form2.addEventListener('submit', (e) =>
  {
    e.preventDefault();
    //console.log(textField.value);
    const newTask = document.createElement('li');
    //newTask.style.color = document.querySelector('option').value;
    console.log(newTask.style.color);
    let btn = document.createElement('button');
    btn.setAttribute('group','buttons');
    btn.textContent = 'X';
    newTask.textContent = textField.value;
    taskList2.appendChild(newTask);
    newTask.appendChild(btn);
    totalList.push(newTask.innerText);
    console.log(totalList);
  });

  selector.addEventListener('change',(e) => {
    taskList2.style.color = selector.value;
  })
  //e.
  
  
    
  document.body.addEventListener('click', (e)=> {
   if (e.target.getAttribute('group') === "buttons")
    {
      e.target.parentNode.remove();
      console.log("we worked");
    }});


  