#!/bin/bash

echo "Setting up Bitbucket CLI..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

echo "Setup complete! You can now use the CLI with:"
echo "  npm run dev -- repos list --workspace YOUR_WORKSPACE"
echo "  or"
echo "  node dist/index.js repos list --workspace YOUR_WORKSPACE"
