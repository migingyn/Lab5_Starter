// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
let voices = [];

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textarea = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const face = document.querySelector('img');

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.querySelectorAll('option:not([disabled])').forEach((o) => o.remove());

    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += ' -- DEFAULT';
      }
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  button.addEventListener('click', () => {
    const text = textarea.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const selectedVoice = voices.find((v) => v.name === selectedName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.addEventListener('start', () => {
      face.src = 'assets/images/smiling-open.png';
    });
    utterance.addEventListener('end', () => {
      face.src = 'assets/images/smiling.png';
    });

    synth.speak(utterance);
  });
}
