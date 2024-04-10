FROM node:18-alpine
WORKDIR /app
ADD . .
RUN yarn install
CMD ["node", "index.js"]
EXPOSE 3000