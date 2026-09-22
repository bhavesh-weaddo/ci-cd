FROM node:24-alpine

# Set the working directory
WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install production dependencies
RUN npm i 

# Copy application source code
COPY . .

# Expose app port and run
EXPOSE 9091
CMD ["node", "server.js"]
