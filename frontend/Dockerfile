FROM node:13.12.0-alpine

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install 

RUN npm rebuild node-sass

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]