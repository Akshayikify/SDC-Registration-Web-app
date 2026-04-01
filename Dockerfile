FROM docker.io/library/node:20-slim@sha256:1e85773c98c31d4fe5b545e4cb17379e617b348832fb3738b22a08f68dec30f3 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --if-present

FROM docker.io/library/node:20-slim@sha256:1e85773c98c31d4fe5b545e4cb17379e617b348832fb3738b22a08f68dec30f3 as stage-1
RUN groupadd -r appuser && useradd -r -g appuser appuser
WORKDIR /home/appuser/app
COPY --from=builder /app/dist . 
USER appuser
EXPOSE 3000
CMD ["node", "server.js"]