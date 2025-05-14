# Stage 1: Install dependencies and build the app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install required system deps (for sharp, etc.)
RUN apk add --no-cache libc6-compat

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine AS runner

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Create app directory
WORKDIR /app

# Install required system deps again for runtime
RUN apk add --no-cache libc6-compat

# Copy only necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

# Expose the Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
