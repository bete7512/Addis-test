# Use the official Node.js image
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3600

CMD ["npm","run", "dev"]
# CMD ["nodemon", "--exec", "babel-node", "./src/server.js"]
