# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install dependencies
RUN npm install --force

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run npm run dev when the container launches
CMD ["npm", "run", "dev"]
