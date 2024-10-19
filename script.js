let container=document.querySelector(".container");
let btn=document.querySelector(".btn");

const FuncInput=(Input) =>{
    let speakinput=new SpeechSynthesisUtterance(Input);
    speakinput.rate=1;
    speakinput.lang="en-in"
    window.speechSynthesis.speak(speakinput);
}

window.onload=() =>{
    // FuncInput("Hello Good Morning sir I am Sophia Your personal assistant What can I help You");
    greetFunc();
}

const greetFunc=()=>{
    let date=new Date();
    let hour= date.getHours();
    if(hour>=0 && hour<12){
        FuncInput("Good Morning sir have breakfast What can I help for you");
    }
    else if(hour>=12 && hour<16){
        FuncInput("Good Afternoon  sir have lunch");
    }
    else if(hour>=16 && hour<20){
        FuncInput("Good Evening  sir have dinner");
    }
    else if(hour>=20 && hour<24){
        FuncInput("Good Night sir What can I help for you");
    }
}
const takeVoiceinput =()=>{
    if('webkitSpeechRecognition' in window){
        let recognization=new webkitSpeechRecognition();
        recognization.lang="en-GB";
        recognization.rate=2;
        recognization.volume=5;
        recognization.onresult=(e)=>{
            let spokenText=e.results[0][0].transcript;
            handlecommands(spokenText.toLowerCase());
        }
        recognization.start();
}else{
    alert("Unable to REcognize Your Voice Sorry");
}
}

btn.onclick=()=>{
    takeVoiceinput();
}

const handlecommands=(command)=>{
    console.log(command);
    if(command.includes("hello"||command.includes("hey Sophia"))){
        FuncInput("Hello Sir How can I help you");
    }
    else if(command.includes("who are you")||command.includes("who developed you")||command.includes("who are founder of you")){
        FuncInput("I am Personal Assisatant Developed by Sudarshan");
    }
    else if(command.includes("open youtube")||command.includes("Do you know youTube")|| command.includes("youtube")){
        FuncInput("Opening Youtube ......");
        window.open("https://www.youtube.com");
    }
    else if(command.includes("open instagram")||command.includes("Do you know instagram")|| command.includes("instagram")){
        FuncInput("Opening Instagram ......");
        window.open("https://www.youtube.com");
    }
    else if(command.includes("open google")||command.includes("google")){
        FuncInput("Opening Google ......");
        window.open("https://www.google.com");
    }
    else if(command.includes("open facebook")||command.includes("facebook")){
        FuncInput("Opening Facebook ......");
        window.open("https://www.facebook.com");
    }
    else if(command.includes("open calulator")){
        FuncInput("Opening Calculator");
        window.open("calculator://")

    }
    else if(command.includes("fuck you")){
        FuncInput("Fuck you too... Fuck you thrice");
        

    }
    else if(command.includes("what's the time now")){
        let date=new Date();
        let hours= date.getHours();
        let minute=date.getMinutes();
        let second=date.getSeconds();
        let month=date.getMonth();
        FuncInput(`The time is ${hours} hours ${minute} minute ${second} seconds`);
        

    }
    else if(command.includes("what is date of today")){
        let date=new Date();
        FuncInput(`sir today's date is ${date}`);
    }
    else if(command.includes("time")){
        let date=new Date();
        let time=date.getTime();
        let month=date.getMonth();
        let day=date.getDay();
        let year=date.getFullYear();

        FuncInput(`Sir time is ${time}`)
    }
    else if(command.includes("open chatgpt")){
        FuncInput("Opening chatgpt...");
        window.open("https://openai.com/index/chatgpt/")

    }
    else if(command.includes("open github")){
        FuncInput("Opening github...");
        window.open("https://github.com/Sudarshan-CSE")

    }
    else if(command.includes("ok bye")||command.includes("bye")){
        FuncInput("Bye sir Thank you");
    }
    

    else{
        FuncInput(`This is what i found on internet ${command}`);
        window.open(`https://www.google.com/search?q=${command}`);
    }

    

}