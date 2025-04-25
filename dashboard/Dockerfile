
# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json / pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN pnpm build

# Expose the port Next.js runs on
EXPOSE 3000

# Run the Next.js app
CMD ["pnpm", "start"]
