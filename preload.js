const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  getRandomGifUrl: () => ipcRenderer.invoke("get-random-gif-url"),
  getUserSettings: () => ipcRenderer.invoke("get-user-settings"),
  updateUserSettings: (newSettings) =>
    ipcRenderer.send("update-user-settings", newSettings),
});
