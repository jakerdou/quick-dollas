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
// app.use("/", indexRouter);
app.use("/", apiRouter);

// // API calls
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });
// app.post('/api/world', (req, res) => {
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));