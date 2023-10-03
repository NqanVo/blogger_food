FROM node:16.15.1
WORKDIR /app
COPY ./ ./
EXPOSE 7070
RUN npm install
CMD [ "npm","start" ]