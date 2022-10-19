let timer;
const slideShow = document.querySelector('.slide-show'); //get container
const slideShowImages = document.querySelectorAll('.slide-show-images');//get slides
let slideNow = 1;
let widthOutput = slideShowImages[1].clientWidth; //initial width = first slide (100%);

//get Window size
function reportWindowSize() {
  //size of first slide, atomatically 100% from css
  widthOutput = slideShowImages[1].clientWidth;
  //move slide so it is centered
  slideShow.style.transform = 'translateX( ' + (-widthOutput*slideNow) + 'px)';
  };
  //everytime screen is resized get new screensize
  window.addEventListener('resize',reportWindowSize);
  //when it loads
  window.addEventListener('load',reportWindowSize);

  //function to move the slides
function slidingSlides(){
  slideNow++;//adds slide count
  activeDot();//change dot color
  //adds smooth transition
  slideShow.style.transition = "transform 1s ease-in-out";
  //moves slideshow one slide (1 width long) to the left
  slideShow.style.transform = 'translateX( ' + (-widthOutput*slideNow) + 'px)';
  //checks if the slide is the cloned last images
  if(slideShowImages[slideNow].id === 'firstClone'){
    //if the slide is the clone, skip over to first slide
    //delete transition to make instantaneous
    slideShow.style.transition = "none";
    slideNow = 0;
    slideShow.style.transform = 'translateX( ' + (-widthOutput*slideNow) + 'px)';
    //reset timer and recall function to go to next slide
    clearTimeout(timer);
    timer = setTimeout(slidingSlides, 0);
  }else{
    //repeats every 6 seconds
    timer = setTimeout(slidingSlides, 6000);
  }
};

//makes the current dot black
function activeDot(){
  const dots = document.querySelectorAll('.dots');
  //check every dot
  for(let i=0; i<dots.length; i++){
    //dot's id is the same as corresponding slide number
    let num = dots[i].id;
    //if it's the same
    if (parseInt(num)===slideNow){
      dots[i].classList.add('this-dot');//adds class name
    }else if(slideNow===0){
      dots[3].classList.add('this-dot');//if clone, add classname to last slide
    }else {
      dots[i].classList.remove('this-dot');//once it passes, remove class
    }
  };
};
//call to get initial dot
activeDot();

//changes slide if dot clicked
function clickDots(num){
  let slideNum = num-1;
  slideNow=slideNum;
  //reset timer and call sliding function to go to that slide.
  clearTimeout(timer);
  slidingSlides();
}

//wait 6 sec before first slide switches.
timer=setTimeout(slidingSlides,6000);
