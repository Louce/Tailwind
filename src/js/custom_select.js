const selectTitle = document.querySelector('.child');
const selectedText = document.querySelector('.selected-text');
const optionsList = document.querySelector('ul');
const optionItems = document.querySelectorAll('li');
const arrowDown = document.querySelector('.arrow_down');
const selectContainer = document.querySelector('.select');

// Cachez la liste du select
optionsList.style.display = 'none';

// ouvrir/fermer le select
function toggleSelect() {
  arrowDown.classList.toggle('rotate-180');
  optionsList.style.display = (optionsList.style.display === 'none') ? 'block' : 'none';
}

// choisir une option
function selectOption(option) {
  arrowDown.classList.remove('rotate-180');
  selectedText.textContent = option.textContent;
  optionsList.style.display = 'none';
}

selectTitle.addEventListener('click', toggleSelect);

optionItems.forEach((option) => {
  option.addEventListener('click', () => {
    selectOption(option);
  });
});

// fermer la liste d'options si l'utilisateur clique en dehors de celle-ci
document.addEventListener('click', (event) => {
  if (!selectContainer.contains(event.target)) {
    optionsList.style.display = 'none';
    arrowDown.classList.remove('rotate-180');
  }
});
