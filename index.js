// 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  //api-keys deleted
// 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  //api-keys deleted


const { Configuration, OpenAIApi } = require ("openai");

const express = require('express');

const port = 3080; 
const configuration = new Configuration({
    organization: "org-kgpishSCR4f1CMnfTHyg04F6",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// Middleware to parse JSON data in the request body
// app.use(express.json());

// Define your routes and logic here
// Example:
const bodyParser=require('body-parser');
const cors=require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/', async(req, res) => {
  const {message}=req.body;
  // console.log(message);
    const response=await openai.createCompletion({
        model:"text-davinci-003",
        prompt:`${message}`,
        max_tokens:100,
        temperature:0.5,
    });
    // console.log(response.data.choices[0].text);
  res.json({ message: response.data.choices[0].text });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




