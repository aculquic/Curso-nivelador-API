FROM node:14
WORKDIR /urs/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD [ "node", "server.js"]