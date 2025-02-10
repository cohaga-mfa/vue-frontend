    FROM node:18-alpine AS builder
    RUN npm install -g pnpm
    WORKDIR /app
    COPY package.json pnpm-lock.yaml ./
    COPY . .
    RUN pnpm install
    CMD pnpm run dev --host
    