# FROM node
FROM node:erbium-slim as base
LABEL mainteiner = 'Ricardo David Ortiz'
WORKDIR /gatsby
COPY package*.json ./
RUN npm install
COPY ./ ./

FROM node:erbium-alpine
COPY  --from=base /gatsby /gatsby
WORKDIR /gatsby
EXPOSE 3000
CMD npm run build && npm run start
