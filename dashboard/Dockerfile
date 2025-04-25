# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only necessary files
COPY package.json ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy everything EXCEPT babel.config.js
COPY . .

# Remove babel.config.js (needed only for testing, not prod build)
RUN rm -f babel.config.js

# Build the Next.js app
RUN pnpm build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
