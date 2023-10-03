FROM node:16.15.1
WORKDIR /app
COPY ./ ./
# EXPOSE 3000
EXPOSE 80
RUN npm install --force
CMD [ "npm","start" ]