const express = require('express');
const path = require('path'); // Import the path module
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 1337;


app.use(express.json());
app.use(express.static(__dirname));
app.use(bodyParser.json());
//app.use(cors()); // Enable CORS for all routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, '/index.html');

    // Use res.sendFile() to send the HTML file
    res.sendFile(__dirname + "/index.html");
  });