async function applySettings() {
  let userSettings = await window.electron.getUserSettings();

  if (userSettings.playMeowSound) {
    meowAudio.volume = 0.15;
  } else {
    meowAudio.volume = 0;
  }
}

const emoticons = [
  "o(>ω<)o",
  "(〃＾▽＾〃)",
  "\\(★ω★)/",
  "\\(≧▽≦)/",
  "･ﾟ･(｡>ω<｡)･ﾟ･",
  "｡ﾟ･ (>﹏<) ･ﾟ｡",
  "(＞ｍ＜)",
  "(っ´ω`)ﾉ(╥ω╥)",
  "(„ಡωಡ„)",
  "(*^.^*)",
  "(°◡°♡)",
  "♡＼(￣▽￣)／♡",
  "(≧◡≦) ♡",
  "(´• ω •`) ♡",
  "~(˘▽˘)~",
  "(づ◡﹏◡)づ",
  "(づ￣ ³￣)づ",
  "(ノ= ⩊ = )ノ",
  "(〃＞＿＜;〃)",
  "(◕‿◕)♡",
];

const meowAudio = document.getElementById("meow-audio");
