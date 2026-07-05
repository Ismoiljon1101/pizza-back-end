FROM node:22-alpine AS builder
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/uploads ./uploads
EXPOSE 3008
ENV PORT=3008
HEALTHCHECK --interval=2s --timeout=2s --retries=3 --start-period=5s \
  CMD node -e "require('net').createConnection({port:3008,host:'127.0.0.1'},()=>process.exit(0)).on('error',()=>process.exit(1))"
CMD ["node", "dist/server.js"]
