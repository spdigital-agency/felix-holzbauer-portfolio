const root = document.querySelector(':root');
const darkToggleImg = document.querySelector('.dark-mode-toggle--img');
let rootStyles = getComputedStyle(root);
let darkMode = 'off';

const favicon = document.querySelector("link[rel~='icon']");

function darkToggle() {
    if(darkMode === 'off') {
        darkToggleImg.classList.add('dark-mode-on');
        root.style.setProperty('--primary', 'black');
        root.style.setProperty('--accent', 'white');
        favicon.href = './images/icons/favicon-white.png'

        darkMode = 'on';
        console.log(darkMode);
    } else {
        darkToggleImg.classList.remove('dark-mode-on');
        root.style.setProperty('--primary', 'white');
        root.style.setProperty('--accent', 'black');
        favicon.href = './images/icons/favicon-black.png';

        darkMode = 'off';
        console.log(darkMode);
    }
}