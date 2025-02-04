# ---- Build Stage ----
    FROM node:18-alpine AS builder

    # Install pnpm globally
    RUN npm install -g pnpm
    
    # Set working directory inside the container
    WORKDIR /app
    
    # Copy package.json and pnpm-lock.yaml first to leverage Docker cache
    COPY package.json pnpm-lock.yaml ./
    
    # Install dependencies using pnpm
    RUN pnpm install --frozen-lockfile
    
    # Copy the entire project
    COPY . .
    