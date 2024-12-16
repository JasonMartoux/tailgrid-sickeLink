# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build with fallback content if API is not available
RUN npm run build || (echo "Building with fallback content" && npm run build)

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy only necessary files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

ENV HOST=0.0.0.0
EXPOSE 4321

CMD ["npm", "run", "preview", "--", "--host"]
