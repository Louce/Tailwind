const darkModeToggle = document.querySelector('.darkmode');
const lightModeToggle = document.querySelector('.lightmode');
const html = document.querySelector('html');
const storageKey = 'darkModeEnabled';

//activer mode sombre
function enableDarkMode() {
  html.classList.add('dark');
  darkModeToggle.classList.add('hidden');
  lightModeToggle.classList.remove('hidden');
  localStorage.setItem(storageKey, 'true');
}

//désactiver le mode sombre
function disableDarkMode() {
  html.classList.remove('dark');
  darkModeToggle.classList.remove('hidden');
  lightModeToggle.classList.add('hidden');
  localStorage.setItem(storageKey, 'false');
}

// toggle en fonction de l'état actuel
function toggleMode() {
  if (html.classList.contains('dark')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

//activer/désactiver le mode sombre au clic sur les boutons
darkModeToggle.addEventListener('click', toggleMode);
lightModeToggle.addEventListener('click', toggleMode);

// Vérifiez le stockage local pour voir si le mode sombre était activé précédemment
const isDarkModeEnabled = localStorage.getItem(storageKey) === 'true';

if (isDarkModeEnabled) {
  enableDarkMode();
} else {
  disableDarkMode();
}
