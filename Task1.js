const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${req.method} ${req.url}\n`;
    fs.appendFile('requests.log', logMessage, (err) => {
        if (err) {
            console.error("Error writing log");
        }
    });
    console.log(logMessage);
    next();
};
app.use(loggerMiddleware);
app.get('/', (req, res) => {
    res.send("Home Page");
});
app.get('/about', (req, res) => {
    res.send("About Page");
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});