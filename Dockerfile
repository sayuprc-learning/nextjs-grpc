FROM node:20-bookworm

WORKDIR /app

USER node

CMD ["bash", "-c", "npm run dev --host & npm run serve &"]
