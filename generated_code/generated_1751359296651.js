Dockerizing a Node.js application involves creating a Dockerfile that defines the environment in which your application will run, and then building and running a Docker container from that image. Below are the steps to Dockerize a simple Node.js application.

### Step 1: Create a Simple Node.js Application

First, create a simple Node.js application if you don't have one already. You can create a directory for your app and set it up like this:

```bash
mkdir my-node-app
cd my-node-app
npm init -y
```

Then, create an `index.js` file:

```javascript
// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Step 2: Add Dependencies

For this example, we'll use Express. You can install it by running:

```bash
npm install express
```

### Step 3: Create a Dockerfile

In the root of your application directory (`my-node-app`), create a file named `Dockerfile` with the following content:

```dockerfile
# Use the official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
```

### Step 4: Create a .dockerignore File

To avoid copying unnecessary files into the Docker image, create a `.dockerignore` file in the same directory:

```
node_modules
npm-debug.log
```

### Step 5: Build the Docker Image

Now you can build the Docker image. Run the following command from the root of your application directory:

```bash
docker build -t my-node-app .
```

### Step 6: Run the Docker Container

Once the image is built, you can run it using the following command:

```bash
docker run -p 3000:3000 my-node-app
```

This maps port 3000 on your host to port 3000 on the container.

### Step 7: Access Your Application

Open your web browser and go to `http://localhost:3000`. You should see "Hello World!" displayed.

### Summary

You have successfully Dockerized a simple Node.js application. The key steps involved creating a `Dockerfile`, building the Docker image, and running the container. You can further customize your Docker setup based on your application's specific needs, such as adding environment variables, using a multi-stage build for production, or integrating with other services.