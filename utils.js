/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */

 class Beat {
    constructor(source){
        this.audio=new Audio(source);
        // this.audio.play();

    }
    play=()=>{
         this.audio.currentTime=0;
         this.audio.play();
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color=color;
        this.keycode=keyCode;
        this.element=document.getElementById(keyCode);
        this.setButtonColorInHTML();

         
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        let myid=document.getElementById(this.keycode);
        myid.style.borderColor=this.color;

    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.boxShadow=`0px 0px 17px 0px ${this.color}`;
        this.element.style.backgroundColor=this.color;
        this.setATransitionEndListener();
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.boxShadow='none';
        this.element.style.backgroundColor='transparent';
    }
    setATransitionEndListener=()=>{
        this.element.addEventListener('transitionend',()=>{
            this.deselect(); 
        })

    }
}   