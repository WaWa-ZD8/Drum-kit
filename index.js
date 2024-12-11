// Detecting button press

for(let output = 0; output < 7; output++){
    console.log(output);

    document.getElementsByClassName("drum")[output].addEventListener("click", function(){
      
      
      var buttonInnerhtml = this.innerHTML;
      makeSound(buttonInnerhtml);
      buttonAnimation(buttonInnerhtml);

      console.log(this);
      });
    
    }

// Detecting keyboard press

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
    
function makeSound(key){

  switch(key){
    case "w":
     var tom1 = new Audio('sounds/tom-1.mp3');
     tom1.play();
     break;

     case "a":
     var tom2 = new Audio('sounds/tom-2.mp3');
     tom2.play();
     break;

     case "s":
     var tom3 = new Audio('sounds/tom-3.mp3');
     tom3.play();
     break;

     case "d":
     var tom4 = new Audio('sounds/tom-4.mp3');
     tom4.play();
     break;

     case "j":
     var snare = new Audio('sounds/snare.mp3');
     snare.play();
     break;

     case "k":
     var crash = new Audio('sounds/crash.mp3');
     crash.play();
     break;

     case "l":
     var cick = new Audio('sounds/kick-bass.mp3');
     cick.play();
     break;

     default:console.log(buttonInnerhtml);
      
  }

}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

 setTimeout(function(){
  activeButton.classList.remove("pressed")
 }, 150);


}