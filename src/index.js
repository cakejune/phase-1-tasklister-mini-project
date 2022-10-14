
  const form2 = document.querySelector('form');
  const textField = document.getElementById('new-task-description');
  const taskList2 = document.getElementById('tasks');
  const selector = document.querySelector('select').value;
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

  document.querySelector('select').addEventListener('onchange',)
    
    
  

    /*btn.addEventListener('click', (e) =>{
    e.preventDefault();
    e.target.parentNode.remove();
    totalList.pop(); //this removes the last item in the array, which doesn't work properly if you X out anything but the last item.
    console.log(btn);   

  if(document.getElementById('select').value == 'red')
  {
    taskList2.children.getAttribute('color').value = 'red';
  }
 // selector.style
  // selector.addEventListener(selector.value.exists(), (e) => {
  //   allTasks.style.color == selector.value.innerText;
  // });
  // if (selector.value=="Blue") {
  //   allTasks.style.color = "blue";
  // };
  */
  document.body.addEventListener('click', (e)=> {
  // if (e.target.innerText === "X") 
  //    {
  //     e.target.parentNode.remove();
  //     console.log("we worked");
  //   }*/
   if (e.target.getAttribute('group') === "buttons")
    {
      e.target.parentNode.remove();
      console.log("we worked");
    }});
  //  console.log(e.target.group);
  

    
 /* document.getElementsByGroupName('buttons').addEventListener('click', (e) =>{
    e.preventDefault();
    e.target.parentNode.remove();
    totalList.pop(); //this removes the last item in the array, which doesn't work properly if you X out anything but the last item.
    console.log(btn);
  });
  */


  