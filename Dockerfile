# ---------- STAGE 1: build ----------
FROM node:18-alpine AS builder
WORKDIR /app

# Только package- и lock-файлы для кэша установки
COPY package*.json ./
RUN npm ci

# Исходники + билд
COPY . .
RUN npm run build

# ---------- STAGE 2: production ----------
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Берём только production-зависимости
COPY package*.json ./
RUN npm ci --production

# Копируем артефакты сборки
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/health || exit 1

CMD ["npm", "run", "start"]
