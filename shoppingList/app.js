//add
let formAdd = document.getElementById('add-item');
formAdd.addEventListener('submit', (e) => {
  let ul = document.getElementsByTagName('ul')[0];

  e.preventDefault();
  let text = formAdd.querySelector('input').value;
  let li = document.createElement('li');

  let groceryName = document.createElement('span');
  let deleteButton = document.createElement('span');

  //inside li - 2 span
  li.appendChild(groceryName);
  li.appendChild(deleteButton);

  //attach li to ul
  ul.appendChild(li);

  //add text
  groceryName.textContent = text;
  deleteButton.textContent = 'delete';

  //add classes
  groceryName.classList.add('name');
  deleteButton.classList.add('delete');
});

//remove
let groceryListUl = document.querySelector('#grocery-list ul');
groceryListUl.addEventListener('click', remove);
function remove(e) {
  let target = e.target;
  if (target.className == 'delete') {
    let li = target.parentElement;
    li.remove();
  }
}
