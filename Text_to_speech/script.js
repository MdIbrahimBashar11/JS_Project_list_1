const speakButton = document.getElementById('speak-btn');
const textInput = document.getElementById('text');
const synth = window.speechSynthesis;

speakButton.addEventListener('click', () => {
  const text = textInput.value;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
});
