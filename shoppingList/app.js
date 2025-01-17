let buttons = document.querySelectorAll('#grocery-list li .delete');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const LI = e.target.parentElement;
    LI.parentElement.removeChild(LI);
  });
});
