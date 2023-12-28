FROM node:20-alpine3.19 

WORKDIR /client

COPY ./app/package*.json ./

RUN npm install --frozen-package-lock.json

COPY ./app .

EXPOSE 8000

CMD npm run dev