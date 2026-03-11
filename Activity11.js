const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());
app.get('/set-cookie', (req, res) => {
    res.cookie('myCookie', 'hello');
    res.send('Cookie set');
});
app.get('/read-cookie', (req, res) => {
    const value = req.cookies.myCookie;
    res.send(`Cookie value: ${value}`);

});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});