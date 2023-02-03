console.log(`
########################################                                                                                                              
########################################                                                                                                              
########################################                                                                                                              
########################################                                                                                                              
########################################               &&&&&    .&&%.                        ,&&%                                   .&&&&&,           
########################################               &&&&&   %&&&&&/                      %&&&&&*                                 .&&&&&,           
########################################               &&&&&    /&&&,                        #&&&.    #&&&&#                        .&&&&&,           
########################################               &&&&&                                          #&&&&#                        .&&&&&,           
######.         (##.    /.        ######     /&&&&&&&&#&&&&&    &&&&&     (&&&&&&&&(&&&&&   ,&&&&&  &&&&&&&&&&%    &&&&&&&&&(&&&&%  .&&&&&,           
#####     ###/ ####.                ####   /&&&&&&&&&&&&&&&&    &&&&&   #&&&&&&&&&&&&&&&&   ,&&&&&  &&&&&&&&&&&  &&&&&&&&&&&&&&&&%  .&&&&&,           
#####.       ,#####.    .######      ###  .&&&&&.      &&&&&    &&&&&  ,&&&&&.     .&&&&&   ,&&&&&    #&&&&#   .&&&&&&.     %&&&&%  .&&&&&,           
########,       /##.    ,######.     ###  .&&&&&       &&&&&    &&&&&  *&&&&&.      &&&&&   ,&&&&&    #&&&&#    &&&&&%      (&&&&%  .&&&&&,     .,    
#####. .###     .##.       ..       ####   #&&&&&&&#%&&&&&&&    &&&&&   &&&&&&&&#%&&&&&&&   ,&&&&&    /&&&&&&&, .&&&&&&&%#&&&&&&&%  .&&&&&,   &&&&&&/ 
####           ,###.    .         /#####     &&&&&&&&&%&&&&&    &&&&&     &&&&&&&&&&&&&&&   ,&&&&&     (&&&&&&&   *&&&&&&&&&/&&&&%  .&&&&&,   &&&&&&. 
###################.    *###############                                           .&&&&&                                                             
###################.    *###############                                %&&&&&&#(&&&&&&&(                                                             
###################.    *###############                                 ,&&&&&&&&&&&&#                                                               
########################################                                                                                                              
########################################                                                                                                              
########################################                                                                                                              
########################################                                                                                                              `)


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


const hamburger = document.querySelector('#hamburger-menu');
const hamburgerLine = document.querySelector('.hamburger-menu-line');
let hamburgerOpen = false;
const nav = document.querySelector('nav');
let navOpen = false;


hamburger.addEventListener('click', () => {
  if(!hamburgerOpen) {
    hamburgerLine.classList.add('hamburger-open');
    hamburgerOpen = true;
    nav.classList.add('nav-open');
  } else {
    hamburgerLine.classList.remove('hamburger-open');
    hamburgerOpen = false;
    nav.classList.remove('nav-open');
  }
});


let root = document.querySelector(':root');
window.addEventListener('load', function() {
  if(window.innerWidth >= 1300) {
    root.style.setProperty('--text-big', '12.8rem');
  }
  if(window.innerWidth < 1300) {
    root.style.setProperty('--text-big', '9.6rem');
  }
  if(window.innerWidth < 820) {
    root.style.setProperty('--text-big', '6.4rem');
  }
});

window.onresize = () => {
  if(window.innerWidth >= 1300) {
    root.style.setProperty('--text-big', '12.8rem');
  }
  if(window.innerWidth < 1300) {
    root.style.setProperty('--text-big', '9.6rem');
  }
  if(window.innerWidth < 820) {
    root.style.setProperty('--text-big', '6.4rem');
  }
}