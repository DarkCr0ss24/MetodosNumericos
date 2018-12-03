const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    ventana = new BrowserWindow({ width: 800, height: 600 });
    ventana.loadFile(`${ __dirname }/index.html`);
});