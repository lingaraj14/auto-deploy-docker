# Stage 1: Build the TypeScript code
# Use Node.js Alpine as base image
FROM node:alpine AS builder

# Set working directory
WORKDIR /build

# Copy package files first for better caching
COPY package*.json ./

# CI environments typically ignore the interactive install-scripts prompt
RUN npm ci

# Copy application code
COPY . .

# Build the TypeScript application
RUN npm run build


# Stage 2: Production runner
FROM node:alpine AS runner

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/package*.json ./
COPY --from=builder /build/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]