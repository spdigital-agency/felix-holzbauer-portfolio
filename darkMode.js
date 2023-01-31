
const root = document.querySelector(':root');
const darkToggleImg = document.querySelector('.dark-mode-toggle--img');
const darkToggleBtn = document.querySelector('.dark-mode-toggle');
let rootStyles = getComputedStyle(root);
let darkMode = 'off';
let homeArrow = document.querySelector('.home--background');

const favicon = document.querySelector("link[rel~='icon']");


export function darkToggle() {
    if(darkMode === 'off') {
        darkToggleImg.classList.add('dark-mode-on');
        if(document.URL.includes('home')) {
            homeArrow.classList.add('dark-mode-on');
        }
        root.style.setProperty('--primary', 'black');
        root.style.setProperty('--accent', 'white');
        favicon.href = './images/icons/favicon-white.png'

        darkMode = 'on';
        localStorage.setItem('darkMode', 'on');
    } else {
        darkToggleImg.classList.remove('dark-mode-on');
        if(document.URL.includes('home')) {
            homeArrow.classList.remove('dark-mode-on');
        }
        root.style.setProperty('--primary', 'white');
        root.style.setProperty('--accent', 'black');
        favicon.href = './images/icons/favicon-black.png';

        darkMode = 'off';
        localStorage.setItem('darkMode', 'off');
    }
}

darkToggleBtn.addEventListener('click', darkToggle);

window.onload = function() {
    if(localStorage.getItem('darkMode') == 'on') {
        darkToggleImg.classList.add('dark-mode-on');
        if(document.URL.includes('home')) {
            homeArrow.classList.add('dark-mode-on');
        }
        root.style.setProperty('--primary', 'black');
        root.style.setProperty('--accent', 'white');
        favicon.href = './images/icons/favicon-white.png'
    
        darkMode = 'on';
        document.body.style.visibility = 'visible';
        document.body.style.opacity = 1;
    }
  }
  