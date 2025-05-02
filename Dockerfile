# ---------- STAGE 1: build ----------
FROM node:18-alpine AS builder
WORKDIR /app

# Копируем манифесты для кэша установки
COPY package*.json ./
RUN npm install

# Копируем всё и билдим
COPY . .
RUN npm run build

# ---------- STAGE 2: production image ----------
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Копируем только необходимое из билдера
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]
