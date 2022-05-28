function speeach(){
   var msg = new SpeechSynthesisUtterance();
   msg.text = document.querySelector('#transcript').value;
   window.speechSynthesis.speak(msg);
}
