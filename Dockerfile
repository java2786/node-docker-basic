FROM node:8-alpine

COPY package.json .

#RUN ["npm", "cache", "clean"]
RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "start"]


