const express = require('express');
const feeds = require('./feeds');
const app = express();
const PORT = 3002;

// allow CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.json({ msg: `API is listening on ${PORT}` });
});

app.get('/feed', (req, res) => {
    feeds.hoopsHype.getArticles(3)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.listen(PORT, () => console.log(`Goal Tending API is listening on ${PORT}!`));
