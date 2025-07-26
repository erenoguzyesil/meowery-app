const { app, BrowserWindow, ipcMain } = require("electron/main");

const path = require("node:path");
const fs = require("fs");
const fetch = require("node-fetch");

require("dotenv").config({ path: path.join(__dirname, '.env') });

const dataFilePath = path.join(app.getPath("userData"), "userSettings.json");

if (!fs.existsSync(dataFilePath)) {
  fs.writeFile(dataFilePath, '{ "playMeowSound": true }', (error) => {
    if (error) {
      console.error(error);
    }
  });
}

function getUserSettings() {
  let fileData = fs.readFileSync(dataFilePath, "utf8");

  return JSON.parse(fileData);
}

function updateUserSettings(_event, newSettings) {
  fs.writeFileSync(dataFilePath, JSON.stringify(newSettings));
}

function getRandomGifUrl() {
  return fetch(process.env.SERVER_URL, { method: "POST" }).then(
    async (response) => JSON.stringify([response.status, await response.text()])
  );
}

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    icon: '/assets/icons/icon.png',
    ...(process.platform !== "darwin" ? { titleBarOverlay: true } : {}),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  window.loadFile("templates/index.html");
};

app.whenReady().then(() => {
  ipcMain.handle("get-user-settings", getUserSettings);
  ipcMain.on("update-user-settings", updateUserSettings);

  ipcMain.handle("get-random-gif-url", getRandomGifUrl);

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
