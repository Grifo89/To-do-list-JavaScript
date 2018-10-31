
// User click on the add button
// If there is any text inside the input field, add test to the todo list
document.getElementById('add').addEventListener('click', function () {
  var text = document.getElementById('item').value;
  if(text) {
    addItemTodo(text)
    document.getElementById('item').value = ''
  }

});

document.getElementById('item').addEventListener('keyup', function (e) {
  if(e.keyCode === 13){
    var text = document.getElementById('item').value;
    if(text) {
      addItemTodo(text)
      document.getElementById('item').value = ''
    }
  }

});

function removeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);


}

// Adds a new item to the todo list
function addItemTodo(item) {
  var list = document.getElementById('todo');

  var tag = document.createElement('li');
  tag.innerText = item

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.style.background='url("./icons/trash.png")';
  remove.style.backgroundSize=' 30px 30px';
  remove.style.backgroundRepeat='no-repeat';
  remove.style.backgroundPosition='center';

  // Add click event for removing the item
  remove.addEventListener('click', removeItem);



  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.style.background='url("./icons/check.png")';
  complete.style.backgroundSize=' 25px 25px';
  complete.style.backgroundRepeat='no-repeat';
  complete.style.backgroundPosition='center';

  // Add click event for completing the item
  complete.addEventListener('click', completeItem);


  buttons.appendChild(remove);
  buttons.appendChild(complete);
  tag.appendChild(buttons);

  list.insertBefore(tag, list.childNodes[0]);
}
