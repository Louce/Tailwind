const checkbox = document.getElementById('toggleCheckbox');
const slider = document.querySelector('.slider');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        //actif
        slider.style.transform = 'translateY(-50%) rotate(360deg)';
    } else {
        //inactif
        slider.style.transform = 'translateY(-50%) rotate(0deg)';
    }
});