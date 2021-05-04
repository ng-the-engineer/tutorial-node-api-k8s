FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3001

CMD ["node", "app.js"]