To create a simple "Hello, World!" application in Node.js, you can use the built-in `http` module to create a web server that responds with "Hello, World!" when accessed. Here's a step-by-step guide:

1. **Install Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Create a new directory for your project**: Open your terminal or command prompt and run:

   ```bash
   mkdir hello-world
   cd hello-world
   ```

3. **Create a new JavaScript file**: You can name it `app.js`:

   ```bash
   touch app.js
   ```

4. **Open `app.js` in your favorite text editor** and add the following code:

   ```javascript
   const http = require('http');

   const hostname = '127.0.0.1'; // Localhost
   const port = 3000; // Port number

   const server = http.createServer((req, res) => {
       res.statusCode = 200; // HTTP status code
       res.setHeader('Content-Type', 'text/plain'); // Response header
       res.end('Hello, World!\n'); // Response body
   });

   server.listen(port, hostname, () => {
       console.log(`Server running at http://${hostname}:${port}/`);
   });
   ```

5. **Run your application**: In your terminal, run the following command:

   ```bash
   node app.js
   ```

6. **Access your application**: Open a web browser and go to `http://127.0.0.1:3000/`. You should see "Hello, World!" displayed in your browser.

That's it! You've created a simple "Hello, World!" web server using Node.js.