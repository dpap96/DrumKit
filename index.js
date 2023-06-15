'use strict'; //strict mode

var numberofButtons= document.getElementsByClassName("drum"); //Get and manipulate all buttons which have the drum class 


//Function for playing music . Takes as parameter the pressed button click or pressed key . 
function playMusic(MusicButton){
    switch (MusicButton) { // ΠΕΡΙΠΤΩΣΙΟΛΟΓΙΑ 
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            
            break;
            case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            
            break;
            case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            
            break;
            case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            
            break;
            case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            
            break;
            case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            
            break;
            case "l": //if(this=l)
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            
            break;
    
        default: //to bazo se alli periptosi i gia na kalispo lathi.
         console("Sorry,this one does not exist. ")
            break;
    }
}

//Styling the selected button using css class ( add class&delete it after a while )
function buttonAnimation(currentKey){
     var selectedKey = document.querySelector("."+ currentKey); //take the press button
     selectedKey.classList.add("pressed"); //add  css class style  to the button

     //Remove class after 100 seconds
     setTimeout(() => {
        selectedKey.classList.remove("pressed");        
     }, 100);

}

//take all buttons and play music when click event is happening
for(var i=0; i<numberofButtons.length; i++){ 
    
    numberofButtons[i].addEventListener("click", function(){
        // console.log(this.textContent); //ME TO THIS EXO PROSBASI STO IDIO KOYMPI---THIS 
        var buttonContent=this.textContent; //this.textContent=numberofButtons[i] , the selected buttons 
        playMusic(buttonContent); 
        buttonAnimation(buttonContent); //adding fade style when button is pressed
});
}

//Event Listener for selecting a key from keyboard &playing music
document.addEventListener("keydown",function(evt){
    playMusic(evt.key); //evt.key=show the inner content of of key a.e 'a'
    buttonAnimation(evt.key);  
});

















































// var audio= new Audio("sounds/tom-1.mp3");
//     audio.play();



// function add(a,b){
//     return a*b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function divide(a,b){
//     if(b===0){
//         return undefined;
//     }else{
//         return a/b;
//     }
//     }
// function calculator(a,b,operator){
//     return operator(a,b);
// }