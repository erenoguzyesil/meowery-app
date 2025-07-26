const emoticonH1 = document.getElementById("emoticon-h1");
const catImg = document.getElementById("cat-img");
const newCatButton = document.getElementById("new-cat-button");
const warningSpan = document.getElementById("warning-span");

let firstMeow = true;

function escapeSpecialCharacters(string) {
  return string
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

newCatButton.addEventListener("click", async () => {
  // console.log(await window.electron.getRandomGifUrl());

  const [gifRequestStatus, randomGifUrl] = JSON.parse(
    await window.electron.getRandomGifUrl()
  );

  if (gifRequestStatus == 200) {
    catImg.src = randomGifUrl;

    emoticonH1.innerHTML = escapeSpecialCharacters(
      pickRandomElement(emoticons)
    );

    firstMeow = false;
    meowAudio.currentTime = 0;
    if (!firstMeow) meowAudio.play();
  } else {
    let countdown = 9;

    newCatButton.disabled = true;
    warningSpan.innerText = "slow down >:( 10";
    warningSpan.style.display = "block";

    let interval = setInterval(() => {
      warningSpan.innerText = "slow down >:( " + countdown;
      countdown -= 1;

      if (countdown == 0) {
        clearInterval(interval);

        warningSpan.style.display = "none";
        newCatButton.disabled = false;
      }
    }, 1000);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  applySettings();

  newCatButton.click();
});
