


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