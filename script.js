
 let beats = {
    "65": {
        beat: new Beat("Piano Chord 331.mp3"),
        button:new Button('#00fffe',65),
    },
    "83": {
        beat: new Beat("Piano Chord 209.mp3"),
        button:new Button('#00fffe',83),
    },
    "68": {
        beat: new Beat("Piano Chord 208.mp3"),
        button:new Button('#00fffe',68),
    }, 
    "70": {
        beat: new Beat("Drum Sticks Hit 3.mp3"),
        button:new Button('#FF00FF',70),
    },
    "71": {
        beat: new Beat("Drum Snare Roll.mp3"),
        button:new Button('#FF00FF',71),
    },
    "72": {
        beat: new Beat("PREL Musical 57.mp3"),
        button:new Button('#FF00FF',72),
    },
    "74": {
        beat: new Beat("Cymbal Suspended 2.mp3"),
        button:new Button('#FFFFFF',74),
    },
    "75": {
        beat: new Beat("Musical Compos 33.mp3"),
        button:new Button('#FFFFFF',75),
    },
    "76": {
        beat: new Beat("Musical Orches 4.mp3"),
        button:new Button('#FFFFFF',76),
    }
}


triggerBeat = (event) => {
    let c=event.keyCode;
    if (c in beats){
        let b=beats[c];
        b.beat.play()
        b.button.select();
        }
    }

document.addEventListener('keydown',triggerBeat)
