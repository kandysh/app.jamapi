FROM node:alpine
WORKDIR /app
COPY . /app
RUN npm i
EXPOSE 5273
CMD ["npm","run","dev"]