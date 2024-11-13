// Speech recognition setup
const recognition = new (window.SpeechRecognition ||
   window.webkitSpeechRecognition)();
 recognition.lang = "en-US";
 const btn = document.querySelector(".btn");
 
 // Attach click event listener to the button
 btn.addEventListener("click", function () {
   // Function to convert text to speech
   function speak(text) {
     const utterance = new SpeechSynthesisUtterance(text);
     window.speechSynthesis.speak(utterance);
   }
 
   // Function to handle recognized commands
   function handleCommand(command) {
     if (command.includes("open youtube")) {
       speak("Opening YouTube sir");
       window.open("https://www.youtube.com", "_blank");
     } else if (command.includes("open google,sir")) {
       speak("Opening Google...");
       window.open("https://www.google.com", "_blank");
     } else if (command.includes("open facebook")) {
       speak("Opening Facebook,sir");
       window.open("https://www.facebook.com", "_blank");
     } else if (command.includes("open instagram")) {
       speak("Opening Instagram,sir");
       window.open("https://www.instagram.com", "_blank");
     } else if (command.includes("open whatsapp")) {
       speak("Opening WhatsApp,sir");
       window.open("https://www.whatsapp.com", "_blank");
     }  else if (command.includes("who are you")) {
      speak("i am your ai assistant sir");
     
    }else if (command.includes("Who is your god")) {
      speak("my developer is pritom sir");
     
    }else {
       // Perform a Google search if command not recognized
       speak("Searching Google for " + command);
       window.open(
         `https://www.google.com/search?q=${encodeURIComponent(command)}`,
         "_blank"
       );
     }
   }
 
   // Greet the user and then start listening
   speak("Hello,how are you,sir? how can I help you?");
 
   // Delay to ensure greeting completes before starting recognition
   setTimeout(() => {
     btn.innerHTML = "Listening...👂";
     btn.classList.add("listening");
     recognition.start();
   }, 2500);
 
   // When a result is received
   recognition.onresult = (event) => {
     console.log(event);
     const command = event.results[0][0].transcript.toLowerCase();
     handleCommand(command);
   };
 
   // When recognition ends
   recognition.onend = () => {
     btn.innerHTML = "Start Listening";
     btn.classList.remove("listening");
   };
 });
 gsap.from("h1",{
   y:100,
   duration:1,
  
 })
 gsap.from(".main",{
   scale:0.3,
 })