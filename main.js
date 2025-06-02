const {
  app,
  BrowserWindow
} = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 1000
  });
  win.maximize();
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow()
})