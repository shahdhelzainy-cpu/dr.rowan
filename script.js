
const gate = document.getElementById("gate");
const passcode = document.getElementById("passcode");
const unlockBtn = document.getElementById("unlockBtn");
const gateMessage = document.getElementById("gateMessage");

const demoPassword = "rona15";

// DEMO ONLY: this password is visible in the source code.
// Never use this as real protection for private photos.
unlockBtn.addEventListener("click", unlockScrapbook);

passcode.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    unlockScrapbook();
  }
});

function unlockScrapbook() {
  if (passcode.value === demoPassword) {
    gate.classList.add("hidden");
    gateMessage.textContent = "";
  } else {
    gateMessage.textContent = "Not quite! Try the demo word again ♡";
  }
}

// Background music
const musicBtn = document.getElementById("musicBtn");
const ourSong = document.getElementById("ourSong");
const musicStatus = document.getElementById("musicStatus");

// We will add this file later:
// Our-Memories/assets/our-song.mp3
ourSong.src = "assets/our-song.mp3";

musicBtn.addEventListener("click", async () => {
  if (!ourSong.paused) {
    ourSong.pause();
    musicBtn.textContent = "Play our song ♫";
    musicStatus.textContent = "Music paused.";
    return;
  }

  try {
    await ourSong.play();
    musicBtn.textContent = "Pause our song ♫";
    musicStatus.textContent = "Now playing our song ♡";
  } catch (error) {
    musicStatus.textContent =
      "No song added yet. Add assets/our-song.mp3 first ♡";
  }
});

ourSong.addEventListener("ended", () => {
  musicBtn.textContent = "Play our song ♫";
});
