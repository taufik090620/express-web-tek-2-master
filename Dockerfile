FROM node:17-alpine

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

CMD ["npm", "run", "start"]
EXPOSE 4000