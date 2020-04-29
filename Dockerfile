# Base image
FROM navikt/node-express:12.2.0-alpine

# Copy client production build to image
COPY ./client/build ./client/build

COPY ./server/server.js ./server/
COPY ./server/package.json ./server/

RUN pwd
# Change working directory to the server
WORKDIR /var/server/server

# Install dependencies for server
RUN npm install

# Start the web server
CMD ["npm", "start"] 