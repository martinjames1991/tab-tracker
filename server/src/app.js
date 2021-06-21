const express = require('express');
// allow our express app to pass any json data date  that is sent in
const bodyParser = require('body-parser');
// allowa any client or host to access it
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    });
});

app.listen(process.env.PORT || 9000);
console.log('server working listing to port 9000');

  