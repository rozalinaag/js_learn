let table = document.getElementById('delegation_table');

table.addEventListener('click', onClickTable);
let priviousItem;

function onClickTable(e) {
  if (priviousItem) {
    priviousItem.style.background = 'gray';
  }
  priviousItem = e.target;
  e.target.style.background = 'red';
  console.log(e.target);
}
