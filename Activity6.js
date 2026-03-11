const express = require('express');
const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
};
app.use(myLogger);
app.get('/', (req, res) => {
    res.send('Ye tu ho ga');
});
app.get('/about', (req, res) => {
    res.send('mery number pr call kro ya message kro Time ni ha');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
