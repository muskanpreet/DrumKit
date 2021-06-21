alert("Click the buttons on the screen or use your keypad to hear the sounds");

for(var i=0;i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    { 
    //    this.style.color="yellow";
       var bttn=this.innerHTML;
       makeSound(bttn);
      animate(bttn);
    });
}
    document.addEventListener("keypress",function(event) {
        makeSound(event.key);
        animate(event.key);
    });
    function makeSound(key)
    {
        switch(key)
        {
            case "t":
                var audio= new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
             case "a":
                 var audio= new Audio("sounds/tom-2.mp3");
                 audio.play();
                 break;
             case "n":
                 var audio= new Audio("sounds/tom-3.mp3");
                 audio.play();
                 break;
             case "g":
                 var audio= new Audio("sounds/tom-4.mp3");
                 audio.play();
                 break;
             case "l":
                 var audio= new Audio("sounds/snare.mp3");
                 audio.play();
                 break;
             case "e":
                 var audio= new Audio("sounds/kick-bass.mp3");
                 audio.play();
                 break;
             case "d":
                 var audio= new Audio("sounds/crash.mp3");
                 audio.play();
                 break;
 
        }
    }
function animate(currentKey)
{
    var akey=document.querySelector("."+currentKey);
    akey.classList.add("pressed");
    setTimeout(function(){
        akey.classList.remove("pressed");
    },100 )
}