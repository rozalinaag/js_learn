let table = document.getElementById('delegation_table');

table.addEventListener('click', onClickTable);
let selectedElement;

function onClickTable(e) {
  let item = e.target;

  if (item.tagName != 'TD') {
    return;
  } else {
    highlight(item);
  }
}

function highlight(node) {
  if (selectedElement != null) {
    // selectedElement.classList.remove('highlight');
    selectedElement.style.backgroundColor = `gray`;
  }

  //assign the new TD element we've clicked to the selectElement variable
  selectedElement = node;
  // selectedElement.classList.add('highlight');

  let randomColor = Math.floor(Math.random() * 16777216).toString(16);
  randomColor = randomColor.padStart(6, '0');
  selectedElement.style.backgroundColor = `#${randomColor}`;
}
