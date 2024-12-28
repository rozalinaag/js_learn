let content = document.getElementById('content');
let button = document.getElementById('show-more');

button.onclick = () => {
  if (content.className == '') {
    content.className = 'open';
    button.innerHTML = 'Collapse now';
  } else {
    content.className = '';
    button.innerHTML = 'Press Me and Show More';
  }
};
