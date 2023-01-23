const root = document.querySelector(':root');
const darkToggleImg = document.querySelector('.dark-mode-toggle--img');
let rootStyles = getComputedStyle(root);
let darkMode = 'off';

function darkToggle() {
    if(darkMode === 'off') {
        darkToggleImg.classList.add('dark-mode-on');
        root.style.setProperty('--primary', 'black');
        root.style.setProperty('--accent', 'white');

        darkMode = 'on';
        console.log(darkMode);
    } else {
        darkToggleImg.classList.remove('dark-mode-on');
        root.style.setProperty('--primary', 'white');
        root.style.setProperty('--accent', 'black');

        darkMode = 'off';
        console.log(darkMode);
    }
}