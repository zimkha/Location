FROM node:12-alpine
RUN apt-get update -y aa apt-get install nodejs
RUN npm install
EXPOSE 3000
CMD ["node", "./src/index.js"]