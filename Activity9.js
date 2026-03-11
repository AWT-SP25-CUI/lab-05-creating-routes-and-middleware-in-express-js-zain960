const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.post('/submit-Zain', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        message: "Zain received",
        data: data
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});