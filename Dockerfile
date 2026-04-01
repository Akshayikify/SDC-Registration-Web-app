FROM docker.io/library/node:20-slim@sha256:1e85773c98c31d4fe5b545e4cb17379e617b348832fb3738b22a08f68dec30f3

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --if-present

FROM node:20-slim as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN groupadd -r appuser && useradd -r -g appuser appuser

WORKDIR /home/appuser/app
COPY --from=builder /app/dist ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

USER appuser

CMD ["node", "index.js"]