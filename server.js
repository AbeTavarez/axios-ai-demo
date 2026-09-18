// 1. Import the express library
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import { groqClient } from './clients/groqClient.js';
import { config } from "dotenv";
import morgan from 'morgan';
config();

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;
const __filename = fileURLToPath(import.meta.url); // file absolute path
const __dirname = path.dirname(__filename); // directory full path

// Mount middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // <- updated

// 4. Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
    console.log(`Incoming Request| URL: ${req.url} | method: ${req.method}`);
    
    // res.send('<h1>Hello, Express!</h1>');
    // res.json({"user": "me"});
});


/**
 * @method POST /responses
 */
app.post('/api/generate', async (req, res) => {
    try {
        // create the payload
        const payload = {
            model: process.env.LLM,
            input: req.body.prompt
        }

        const result = await groqClient.post('/responses', payload);
        
        console.log(result.data);
        
        res.status(201).json({output: result.data.output});
    
    } catch (error) {
        console.error('Error creating post:', error.message);
        res.status(500).json({ message: 'Failed to create post.' });
    }
});


// 5. Start the server and have it listen for incoming connections
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});