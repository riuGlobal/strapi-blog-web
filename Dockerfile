# FROM node
FROM node:erbium-slim as base
LABEL mainteiner = 'Ricardo David Ortiz'
WORKDIR /gatsby
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:erbium-alpine
COPY  --from=base /gatsby /gatsby
EXPOSE 3000
CMD npm run start
