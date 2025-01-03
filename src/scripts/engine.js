const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mappedKeys = [];
const audio = new Audio();

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKeys = document
    .querySelector(`[data-key="${key}"]`)
    clickedKeys.classList.add("active")
    setTimeout(() => {
        clickedKeys.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () =>  playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", 
    (e) => {
        if (mappedKeys.includes(e.key)) {
            playTune(e.key);
        }
    }
);

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
  };
  
volumeSlider.addEventListener("input", handleVolume);
  
keysCheck.addEventListener("click", showHideKeys);
  