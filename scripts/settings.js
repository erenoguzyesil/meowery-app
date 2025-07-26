const settingsDOM = {
  playMeowSound: document.getElementById("play-meow-sound-button"),
};

function setButtonContent(button, buttonBoolean) {
  if (buttonBoolean) {
    button.innerText = "yes!";
    button.classList.remove("no");
  } else {
    button.innerText = "no!";
    button.classList.add("no");
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  let userSettings = await window.electron.getUserSettings();

  for (let setting in settingsDOM) {
    let correspondingButton = settingsDOM[setting];

    correspondingButton.addEventListener("click", () => {
      userSettings[setting] = !userSettings[setting];
      window.electron.updateUserSettings(userSettings);

      setButtonContent(correspondingButton, userSettings[setting]);
    });

    setButtonContent(correspondingButton, userSettings[setting]);
  }
});
