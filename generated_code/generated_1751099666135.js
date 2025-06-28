To create a simple "Hello World" application in Node.js, you can follow these steps:

1. **Install Node.js**: If you haven't already installed Node.js, download it from [the official website](https://nodejs.org/) and install it.

2. **Create a new directory for your project**:
   ```bash
   mkdir hello-world
   cd hello-world
   ```

3. **Initialize a new Node.js project** (optional but recommended):
   ```bash
   npm init -y
   ```

4. **Create a JavaScript file**: Create a file named `app.js` (or any name you prefer):
   ```bash
   touch app.js
   ```

5. **Write the "Hello World" code**: Open `app.js` in your favorite text editor and add the following code:
   ```javascript
   // app.js
   console.log("Hello, World!");
   ```

6. **Run the application**: In your terminal, execute the following command:
   ```bash
   node app.js
   ```

7. **Output**: You should see the output:
   ```
   Hello, World!
   ```

That's it! You have successfully created and run a simple "Hello World" program in Node.js. If you want to create a web server that responds with "Hello World", you can use the following code instead:

```javascript
// app.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

To run this web server, save the code in `app.js` and execute `node app.js`. You can then open your web browser and go to `http://127.0.0.1:3000/` to see the "Hello, World!" message.