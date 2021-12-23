//Based off of this project from youtube, not all my code
//https://www.youtube.com/watch?v=9o2rSxHiv9w
const button = document.querySelector("button");
//gets the speech recognition from that browser 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

//To log that it has started listening 
recognition.onstart = function() {
    console.log("Speech recognition started");
};

//will receive the event 
recognition.onresult = function(event) {
    console.log(event);

    const spokenWords = event.results[0][0].transcript;

    console.log("Spoken words are: ", spokenWords);
    computerSpeech(spokenWords);
};

//Need to figure out how to make it a female voice
function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;
    determineWords(speech, words);


    window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
    if(words.includes("how are you")) {
        speech.text = "I am doing lovely, thank you";
    }
    if(words.includes("who am I")) {
        speech.text = "You are my creator";
    }
    if(words.includes("how is the weather")) {
        speech.text = "Cold, too peopley no matter what";
    }
    if(words.includes("do you care for me")) {
        speech.text = "Yes, I do";
    }
    if(words.includes("open YouTube for me please")) {
        speech.text = "Opening Youtube currently";
        window.open("https://www.youtube.com/")
    }
    //popup is blocked aw well
    if(words.includes("open Google for me please")) {
        speech.text = "Opening Google currently";
        window.open("https://www.google.com/")
    }

}

button.addEventListener("click", () => {
    recognition.start();
});