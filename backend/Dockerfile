FROM node:20.16.0

WORKDIR /task-management-wra

COPY package* .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]