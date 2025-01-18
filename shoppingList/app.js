let groceryListUl = document.querySelector('#grocery-list ul');

groceryListUl.addEventListener('click', remove);

function remove(e) {
  let target = e.target;
  if (target.className == 'delete') {
    let li = target.parentElement;
    li.remove();
  }
}
