const path = require('path');
const express = require('express');

const app = express();

app.use(express.json()); // enables json to be received

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.use(express.static(path.join(__dirname, 'public/dist/public')));

app.listen(7088, 'localhost', _ => console.log("listening on port 7088"));