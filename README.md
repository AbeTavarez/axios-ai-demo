## Creating a new project

1. Create project directory: `mkdir project-name`

1a. In the new project folder run: `npm init -y`

2. install Dependencies: `npm i express` and
`npm i --save-dev nodemon`

3. Create main app file: `touch server.js or index.js`

4. Update package.json: From: `"type": "commonjs", "main": "index.js",` To: `"type": "module", "main": "server.js",`

5. Create a script: `"dev": "nodemon server.js"`

6. Create Git Ignore: `echo -e "node_modules\n.env" > .gitignore`

7. Run the server: `npm run dev`

8. Add the server code:
``` javascript
// 1. Import the express library
const express = require('express');

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;

// 4. Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 5. Start the server and have it listen for incoming connections
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```


## Cloning this repo

1. In your terminal run: `git clone https://github.com/AbeTavarez/express-server26.git new-project-name`

2. From the new project directory run: `npm i` and delete the old repo: `rm -rf .git`

3. Run the app: `npm run dev`