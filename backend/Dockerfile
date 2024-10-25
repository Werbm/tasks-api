FROM node:20.16.0

WORKDIR /task-management-wra

COPY package* .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]