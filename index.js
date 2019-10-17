const {app, BrowserWindow} = require('electron');

function createWindows() {
 let appWindow = new BrowserWindow(); //({}) add the width and height of a window
 appWindow.loadFile('./index.html');

}

app.on('ready', createWindows); // "npm start to launch in terminal