const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let currentColor = { red: 255, green: 0, blue: 0 };

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

app.get('/color', (req, res) => {
    const hexColor = rgbToHex(currentColor.red, currentColor.green, currentColor.blue);
    res.json({ color: hexColor });
});

app.post('/color', (req, res) => {
    try {
        let { red, green, blue } = req.body;
        
        red = parseInt(red);
        green = parseInt(green);
        blue = parseInt(blue);

        if (Number.isInteger(red) && Number.isInteger(green) && Number.isInteger(blue) && 
            red >= 0 && red <= 255 && 
            green >= 0 && green <= 255 && 
            blue >= 0 && blue <= 255) {

            currentColor = { red, green, blue };
            res.send('成功更新顏色，看到這行字你應該高興!');
        } else {
            res.status(400).send('顏色格式不對，可能是超出範圍');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('格式錯誤');
    }
});

const PORT = 8002;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
