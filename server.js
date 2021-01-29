const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var cors = require("cors");
const port = process.env.PORT || 9000;
require('dotenv').config();


const token = process.env.BEARER_TOKEN;  
const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL = 'https://api.twitter.com/2/tweets/search/stream';

// Create Routers
var apiRouter = require("./routes/api");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create Routes
app.use("/", apiRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));