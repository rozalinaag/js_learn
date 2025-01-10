let table = document.getElementById('delegation_table');

table.addEventListener('click', onClickTable);
let selectedElement;

function onClickTable(e) {
  let item = e.target;
  highlight(item);

  item.classList.add('highlight');
}

function highlight(node) {
  if (selectedElement != null) {
    selectedElement.classList.remove('highlight');
  }

  //assign the new TD element we've clicked to the selectElement variable
  selectedElement = node;
  selectedElement.classList.add('highlight');
}
