const express = require('express');
const app = express();
const port = 3000;

const loggerMiddleware = (req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
};

const authMiddleware = (req, res, next) => {

    const isAuthenticated = true;

    if (isAuthenticated) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

app.use(loggerMiddleware);
app.use(authMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});