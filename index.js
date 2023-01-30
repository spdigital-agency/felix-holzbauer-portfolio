const root = document.querySelector(':root');
const darkToggleImg = document.querySelector('.dark-mode-toggle--img');
let rootStyles = getComputedStyle(root);
let darkMode = 'off';
let homeArrow = document.querySelector('.home--background');

const favicon = document.querySelector("link[rel~='icon']");

function darkToggle() {
    if(darkMode === 'off') {
        darkToggleImg.classList.add('dark-mode-on');
        if(document.URL.includes('home')) {
            homeArrow.classList.add('dark-mode-on');
        }
        root.style.setProperty('--primary', 'black');
        root.style.setProperty('--accent', 'white');
        favicon.href = './images/icons/favicon-white.png'

        darkMode = 'on';
        console.log(darkMode);
    } else {
        darkToggleImg.classList.remove('dark-mode-on');
        if(document.URL.includes('home')) {
            homeArrow.classList.remove('dark-mode-on');
        }
        root.style.setProperty('--primary', 'white');
        root.style.setProperty('--accent', 'black');
        favicon.href = './images/icons/favicon-black.png';

        darkMode = 'off';
        console.log(darkMode);
    }
}

/* 
function checkImage(imageSrc, good, bad) {
    let image = new Image();
    image.onload = good; 
    image.onerror = bad;
    image.src = imageSrc;
}

function getImages() {

    const projectContainer = document.querySelector('.projects--container');
    let i;
    for(i=1;i<9;++i) {
        
        let imgSauce = `./images/images/image (${i}).webp`;
        if(checkImage(imgSauce, function(){ return(true); }, function(){ return(false); } )) {
            let img = document.createElement('img');
            let imgContainer = document.createElement('div');
            img.src = imgSauce;
            img.classList.add('project--img');
            imgContainer.classList.add('project--img-container')
            imgContainer.appendChild(img);
            projectContainer.appendChild(imgContainer);
        }
    }
}

getImages();
*/


function checkImage(imageSrc, callback) {
    let image = new Image();
    image.onload = function() {
      callback(true);
    }; 
    image.onerror = function() {
      callback(false);
    };
    image.src = imageSrc;
  }
  
  function getImages() {
    const projectContainer = document.querySelector('.projects--container');
  
    for (let i = 1; i < 10; i++) {
      let imgSauce = `./images/images/image (${i}).webp`;
      checkImage(imgSauce, function(imageLoaded) {
        if (imageLoaded) {
          let img = document.createElement('img');
          let imgContainer = document.createElement('div');
          img.src = imgSauce;
          img.classList.add('project--img');
          imgContainer.classList.add('project--img-container');
          imgContainer.appendChild(img);
          projectContainer.appendChild(imgContainer);
        }
      });
    }
  }
  
  getImages();