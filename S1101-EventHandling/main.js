// --- Get HMTL controls
var btnEnter = document.getElementById('buttonEnter');
console.assert(btnEnter !== null);
var txtInput = document.getElementById('textModule');
console.assert(txtInput !== null);
var listToDoItems = document.getElementById('listToDoItems');
console.assert(listToDoItems !== null);
var btnDeleteList = document.getElementsByClassName('buttonDelete');
console.assert(btnDeleteList !== null);

// --- Set up Event Listeners
listToDoItems.addEventListener('click', ToggleToDoItem);

btnEnter.addEventListener('click', AddToDoItem);

txtInput.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) { // Enter key
    AddToDoItem();
  }
});

for (var button = 0; button < btnDeleteList.length; button++) {
  btnDeleteList[button].addEventListener('click', DeleteToDoItem);
}

// --- Event Handlers
function AddToDoItem () {
  console.log(txtInput.value);

  if (txtInput.value.length > 0) {
    var newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(txtInput.value));
    newItem.className = 'list-group-item';

    var button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.className = 'btn btn-sm float-right buttonDelete';
    button.addEventListener('click', DeleteToDoItem);
    newItem.appendChild(button);

    listToDoItems.appendChild(newItem);

    txtInput.value = '';
  }
}

function ToggleToDoItem (event) {
  console.log(event);

  for (let curItem = 0; curItem < listToDoItems.childElementCount; curItem++) {
    const element = listToDoItems.children[curItem];

    if (element === event.target) {
      console.log(element);
      element.classList.toggle('done');
    }
  }
}

function DeleteToDoItem (event) {
  var item = event.currentTarget.offsetParent;

  for (let curItem = 0; curItem < listToDoItems.childElementCount; curItem++) {
    const element = listToDoItems.children[curItem];

    if (element === item) {
      console.log(element);
      listToDoItems.children[curItem].remove();
    }
  }
}
