# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build your Docusaurus site (adjust the build command if needed)
RUN npm run build

# Expose the port that your Docusaurus site will run on (usually 3000)
EXPOSE 3000

# Start your Docusaurus site
CMD ["npm", "start"]
