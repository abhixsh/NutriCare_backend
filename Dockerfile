FROM node:18-alpine

WORKDIR /

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD [ "nodemon", "index.js" ]