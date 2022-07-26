const express = require('express');
const path = require('path');
const nomeApp = "biblioteca-front";
const app = express();


// Serve only the static files form the dist directory
app.use(express.static('./dist/biblioteca-front'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/biblioteca-front/'}),
);

// app.use(express.static(`${__dirname}/dist/${nomeApp}`));

// app.get('/*', (req, res) => {
// res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
// });


app.listen(process.env.PORT || 8080);