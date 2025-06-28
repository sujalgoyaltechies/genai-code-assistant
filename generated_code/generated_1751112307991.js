Dockerizing a Node.js application involves creating a Docker image that encapsulates your application and its dependencies. Below is a step-by-step guide to help you Dockerize a basic Node.js application.

### Step 1: Create a Simple Node.js Application

First, let's create a simple Node.js application. You can skip this step if you already have an application.

1. Create a new directory for your application:
   ```bash
   mkdir my-node-app
   cd my-node-app
   ```

2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```

3. Install Express (or any other dependencies you need):
   ```bash
   npm install express
   ```

4. Create an `index.js` file with the following content:
   ```javascript
   const express = require('express');
   const app = express();
   const PORT = process.env.PORT || 3000;

   app.get('/', (req, res) => {
       res.send('Hello, Docker!');
   });

   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

5. (Optional) Create a `.gitignore` file to ignore `node_modules`:
   ```
   node_modules
   ```

### Step 2: Create a Dockerfile

Now, let's create a `Dockerfile` to define how the Docker image will be built.

1. In the root of your project directory, create a file named `Dockerfile` (no file extension) and add the following content:

   ```dockerfile
   # Use the official Node.js image from the Docker Hub
   FROM node:14

   # Set the working directory inside the container
   WORKDIR /usr/src/app

   # Copy package.json and package-lock.json (if available)
   COPY package*.json ./

   # Install the app dependencies
   RUN npm install

   # Copy the rest of the application code
   COPY . .

   # Expose the port the app runs on
   EXPOSE 3000

   # Command to run the application
   CMD ["node", "index.js"]
   ```

### Step 3: Create a .dockerignore File

To avoid copying unnecessary files into the Docker image, create a `.dockerignore` file in the root of your project directory:

```
node_modules
npm-debug.log
```

### Step 4: Build the Docker Image

Now, you can build the Docker image. Run the following command in the root of your project directory:

```bash
docker build -t my-node-app .
```

### Step 5: Run the Docker Container

After the image is built, you can run it in a container:

```bash
docker run -p 3000:3000 my-node-app
```

This command maps port 3000 of the container to port 3000 on your host machine. You should see output indicating that your server is running.

### Step 6: Access the Application

Open a web browser and go to `http://localhost:3000`. You should see "Hello, Docker!" displayed in your browser.

### Step 7: Stop the Container

To stop the running container, you can use `Ctrl+C` in the terminal where the container is running, or find the container ID and stop it using:

```bash
docker ps         # List running containers
docker stop <container_id>  # Replace <container_id> with the actual ID
```

### Conclusion

You've successfully Dockerized a Node.js application! You can now share your Docker image with others or deploy it to a cloud service that supports Docker containers. If you have any further questions or need additional features, feel free to ask!