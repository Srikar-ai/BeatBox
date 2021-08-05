

 class Beat {
    constructor(source){
        this.audio=new Audio(source);

    }
    play=()=>{
         this.audio.currentTime=0;
         this.audio.play();
    }
}

class Button {
    constructor(color, keyCode){
        this.color=color;
        this.keycode=keyCode;
        this.element=document.getElementById(keyCode);
        this.setButtonColorInHTML();

         
    }


    setButtonColorInHTML = () => {
        let myid=document.getElementById(this.keycode);
        myid.style.borderColor=this.color;

    }


    select = () => {
        this.element.style.boxShadow=`0px 0px 17px 0px ${this.color}`;
        this.element.style.backgroundColor=this.color;
        this.setATransitionEndListener();
    }


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
