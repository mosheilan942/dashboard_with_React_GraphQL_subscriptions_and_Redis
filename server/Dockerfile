FROM node:18-alpine 

WORKDIR /server

COPY ./app/package*.json ./

COPY ./app ./

RUN npm install 

EXPOSE 4000

CMD ["npm", "run", "start:dev"]