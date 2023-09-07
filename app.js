const express = require('express');
const path = require('path'); // Import the path module
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 1337;


app.use(express.json());
app.use(express.static(__dirname));
app.use(bodyParser.json());
//app.use(cors()); // Enable CORS for all routes

const axios = require("axios");
const key = "3d3272cf0"
require("dotenv").config(); // Load environment variables from .env file


const apiUrl = process.env.AZURE_END_POINT

const apiKey = process.env.AZURE_CHATGPT_API_KEY;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, '/index.html');

    // Use res.sendFile() to send the HTML file
    res.sendFile(__dirname + "/index.html");
  });

  app.post("/get-ai-help", async (req, res) => {

    const _key = req.body.mykey;
    if(_key === key)
    {
    try {

      const inputText = req.body.inputText;
      const prompt=[
        {
          role: "system",
          content:
            "You are helpful assistant",
        },
        {
          role: "user",
          content: `${inputText}`
        },
      ];
      const requestData = {
        messages: prompt ,
        max_tokens: 800,
        temperature: 0.7,
        frequency_penalty: 0,
        presence_penalty: 0,
        top_p: 0.95,
        stop: null,
      };
  
      const headers = {
        "Content-Type": "application/json",
        "api-key": apiKey,
      };
  
      axios
        .post(apiUrl, requestData, { headers })
        .then((response) => {
          console.log(JSON.stringify(response.data));
          res.status(200).json({ result: response.data.choices[0].message.content });
        })
        .catch((error) => {
          console.error("Error:", error);
          res.status(500).json({ error: "An error occurred -" + error.message });
        });
  
      
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: "An error occurred -" + error.message });
    }
  }else {
    res.status(401).json({ success: false, message: 'Invalid credentials.' });
    
  }
  });



  //Write POST API to check user credentials again hardcoded string 

  
  
  app.post("/login", async (req, res) => {
      const { username, password } = req.body;

  // Check if the provided credentials match the hardcoded credentials
  if (username === "admin" && password === "admintcs4321") {
    res.json({ success: true, message: '3d3272cf0' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }
    
  } )