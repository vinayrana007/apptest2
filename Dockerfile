#Build version 8-alpine node image
FROM node:8-alpine

# Create app directory as /app
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Building source code
RUN npm install

# Copy Source Code to the DockerImage
COPY . /app

# EXPOSE instruction to have port 5000 mapped by the docker daemon
EXPOSE 3000

# Start the node server
CMD [ "npm", "start" ]  
