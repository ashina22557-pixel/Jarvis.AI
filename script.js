const micBtn = document.getElementById("micBtn");
const status = document.getElementById("status");
const chat = document.getElementById("chat");
const scanner = document.getElementById("scanner");

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;

function speak(text){
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
}

micBtn.onclick = function(){

    status.innerHTML="🎤 Listening...";
    recognition.start();

}

recognition.onresult = function(event){

    const command = event.results[0][0].transcript.toLowerCase();

    chat.innerHTML="<b>Ma'am:</b> "+command;

    if(command.includes("hello")){

        let reply="Welcome Ma'am. I am Jarvis, AI Assistant of the Department of Computer Science with Artificial Intelligence. How can I help you?";

        speak(reply);

        chat.innerHTML+="<br><br><b>Jarvis:</b> "+reply;

    }

    else if(command.includes("department")){

        let reply="Our department conducts innovative Artificial Intelligence events including AI Vision Arena and AI Reel Battle.";

        speak(reply);

        chat.innerHTML+="<br><br><b>Jarvis:</b> "+reply;

    }

    else if(command.includes("event")){

        let reply="Prompt Association Day showcases AI creativity, innovation and student talent.";

        speak(reply);

        chat.innerHTML+="<br><br><b>Jarvis:</b> "+reply;

    }

    else if(command.includes("thank you") || command.includes("bye")){

        let reply="Thank you Ma'am. Here is your scanner.";

        speak(reply);

        chat.innerHTML+="<br><br><b>Jarvis:</b> "+reply;

        scanner.style.display="block";

    }

    else{

        let reply="Sorry Ma'am. Please ask about the department or the event.";

        speak(reply);

        chat.innerHTML+="<br><br><b>Jarvis:</b> "+reply;

    }

}

recognition.onerror=function(){

status.innerHTML="Please allow microphone permission.";

}
