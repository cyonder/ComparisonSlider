(function () {
  /*  
    The Before picture has 50% of the width at the begininng. 
    And it's calculated again by JS onSliderMove.
    The After picture has 100% of the width and always will.
    
    Depending on the mouse position The Before picture is 
    shrinked or expanded over The After picture.

    This gives the impresion of both images are transforming depending
    on the movement of slider-control but actually not. 
    
    Then you will see that it is not the spoon that bends it is only yourself.
  */
  
  var sliderContainer = document.querySelector(".slider-container");
  var sliderControl = document.querySelector(".slider-control");
  var sliderBefore = document.querySelector(".slider-before");
  
  var sliderClicked = false;
  const SLIDER_WIDTH = sliderContainer.offsetWidth;

  sliderControl.addEventListener("mousedown", onSliderClick);
  window.addEventListener("mouseup", onSliderStop);

  function onSliderClick(){
    sliderClicked = true;
    window.addEventListener("mousemove", onSliderMove);
  }

  function onSliderMove(e){
    // Prevent slider-control from following the cursor everywhere on the page.
    if(!sliderClicked){
      return false;
    }else{
      mouseX = calculateMousePosition(e);
      
      // Prevent slider-control to be positioned outside the image
      if(mouseX < 0) mouseX = 0;
      if(mouseX > SLIDER_WIDTH) mouseX = SLIDER_WIDTH;

      sliderControl.style.left = mouseX + "px";
      sliderBefore.style.width = mouseX + "px";
    }
  }

  function onSliderStop(){
    sliderClicked = false;    
  }

  function calculateMousePosition(e){
    var rectValues = sliderContainer.getBoundingClientRect();
    // Set the mouseX value relative to slider-container
    var mouseX = e.clientX - rectValues.left;
    return mouseX;
  }
}());
