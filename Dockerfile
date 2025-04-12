# Stage 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
