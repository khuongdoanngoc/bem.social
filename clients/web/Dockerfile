# sử dụng image Node.js chính thức làm base image
FROM node:18-alpine AS builder

# đặt thư mục làm việc bên trong container
WORKDIR /app

# sao chép package.json và package-lock.json trước để cìa đặt dependencies trước
COPY package.json package-lock.json ./

# cài đặt dependencies
RUN npm install

# sao chép toàn bộ mã nguồn vào container
COPY . .

# build ứng dụng nextjs
RUN npm run build

# Stage mới để tạo container nhẹ hơn
FROM node:18-alpine AS runner

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép output từ builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Cấu hình biến môi trường (tuỳ chỉnh nếu cần)
ENV NODE_ENV=production

# Câu lệnh chạy Next.js
CMD ["npm", "run", "start"]
