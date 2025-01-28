# Step 1: Use a Node.js image as the base image
FROM node:18 as build

# Step 2: Set the working directory in the container
WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use a lightweight web server to serve the app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Step 8: Expose port 80
EXPOSE 80

# Step 9: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

