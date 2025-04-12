# Stage 1: Build the React app
FROM node:20-alpine 

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application files and build
COPY . .
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:1.23-alpine AS production

# Copy the custom nginx.conf file to the container
#COPY .docker/nginx.conf /etc/nginx/nginx.conf

# Remove default Nginx config and copy our own
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html