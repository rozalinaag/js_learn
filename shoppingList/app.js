//add
let formAdd = document.getElementById('add-item');
formAdd.addEventListener('submit', (e) => {
  let ul = document.getElementsByTagName('ul')[0];

  e.preventDefault();
  let text = formAdd.querySelector('input').value;
  //clean field
  formAdd.querySelector('input').value = null;

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

//hide items
let checkbox = document.querySelector('#hide');
checkbox.addEventListener('change', (e) => {
  let groceryList = document.getElementById('grocery-list');

  if (checkbox.checked) {
    groceryList.style.display = 'none';
  } else {
    groceryList.style.display = 'block';
  }
});

//search for items
const SEARCH = document.forms['search-item'].querySelector('input');
SEARCH.addEventListener('keyup', (e) => {
  let text = e.target.value.toLowerCase();

  let groceryList = document.querySelector('#grocery-list ul');
  let groceries = groceryList.getElementsByTagName('li');
  let groceriesArray = Array.from(groceries);

  groceriesArray.forEach((grocery) => {
    let groceryName = grocery.firstElementChild.textContent;
    let lowName = groceryName.toLowerCase();

    if (lowName.indexOf(text) == -1) {
      grocery.style.display = 'none';
    } else {
      grocery.style.display = 'block';
    }
  });
  console.log(text);
});
