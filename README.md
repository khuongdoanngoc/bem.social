# BEM Social

Hệ thống mạng xã hội được xây dựng với kiến trúc microservices, sử dụng NestJS cho backend và NextJS cho frontend.

## Công nghệ sử dụng

### Frontend
- NextJS 14
- TypeScript
- Tailwind CSS

### Backend
- NestJS (Microservices)
- TypeScript
- PostgreSQL
- TypeORM
- JWT Authentication
- Bcrypt

### Infrastructure
- Docker & Docker Compose
- Redis (caching và rate limiting)
- RabbitMQ (communication giữa các microservices)
- API Gateway pattern
- Microservices architecture

## Cài đặt

### Yêu cầu hệ thống
- Node.js 18+
- Docker & Docker Compose
- Git

### Cài đặt với Docker (khuyến nghị)

1. Clone repository
```bash
git clone <repository-url>
cd bem.social
```

2. Chạy toàn bộ hệ thống với Docker Compose
```bash
cd docker
# Build các container
docker compose build
# Khởi động toàn bộ hệ thống
docker compose up -d
```

### Cài đặt thủ công (cho development)

1. Cài đặt dependencies cho API Gateway
```bash
cd api-gateway
yarn install
```

2. Cài đặt dependencies cho Auth Service
```bash
cd services/auth-service
yarn install
```

3. Cài đặt dependencies cho Frontend
```bash
cd clients/web
yarn install
```

4. Cấu hình môi trường
   - Copy file `.env.example` thành `.env` trong các thư mục `api-gateway` và `services/auth-service`
   - Cập nhật các biến môi trường theo cấu hình của bạn

5. Khởi động PostgreSQL và Redis (có thể sử dụng Docker)
```bash
cd services/auth-service
docker compose up -d
```

## Chạy ứng dụng (Development mode)

0. Chạy RabbitMQ (yêu cầu cho communication giữa các microservices)
```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```
RabbitMQ Management UI sẽ chạy tại `http://localhost:15672` (guest/guest)

1. Chạy Auth Service
```bash
cd services/auth-service
yarn start:dev
```
Auth Service sẽ chạy tại `http://localhost:3001`

2. Chạy API Gateway
```bash
cd api-gateway
yarn start:dev
```
API Gateway sẽ chạy tại `http://localhost:8000`

3. Chạy Frontend
```bash
cd clients/web
yarn dev
```
Frontend sẽ chạy tại `http://localhost:3000`

## Tính năng

- [x] Đăng ký tài khoản
- [x] Đăng nhập
- [ ] Quản lý profile
- [ ] Quản lý bài viết
- [ ] Follow/unfollow người dùng
- [ ] News feed
- [ ] Thông báo realtime
- [ ] Tìm kiếm

## Cấu trúc thư mục

```
bem.social/
├── api-gateway/               # API Gateway (NestJS)
│   ├── src/
│   │   ├── config/           # Cấu hình
│   │   ├── interfaces/       # TypeScript interfaces
│   │   ├── guards/           # Guards (JWT, etc.)
│   │   ├── middlewares/      # Middlewares
│   │   └── filters/          # Exception filters
│
├── services/                  # Microservices (NestJS)
│   ├── auth-service/         # Authentication service
│   │   ├── src/
│   │   │   ├── entities/     # Database entities
│   │   │   ├── dto/          # Data Transfer Objects
│   │   │   ├── strategies/   # Passport strategies
│   │   │   ├── auth.service.ts
│   │   │   └── auth.controller.ts
│   │   │
│   │   └── [other-services]/     # Other microservices (future)
│   │
│   └── [other-services]/     # Other microservices (future)
│
├── clients/                   # Frontend applications
│   ├── web/                  # Web client (NextJS)
│   │   ├── src/
│   │   │   ├── app/          # Next.js App Router
│   │   │   ├── components/   # React components
│   │   │   └── lib/          # Utility functions
│   │   │
│   │   └── [other-clients]/     # Other clients (future)
│   │
│   └── [other-clients]/     # Other clients (future)
│
├── shared/                    # Shared code
│   └── types/                # Shared TypeScript types
│
├── docker/                    # Docker configuration
│   ├── dockerfiles/          # Dockerfiles
│   │
│   ├── scripts/              # Helper scripts
│   │
│   ├── nginx/                # Nginx configuration
│   │
│   └── docker-compose.yml    # Docker Compose configuration
│
├── kubernetes/                # Kubernetes configuration (future)
│
└── docs/                      # Documentation
```

## API Gateway

API Gateway đóng vai trò là điểm vào duy nhất của hệ thống, định tuyến các yêu cầu đến microservices tương ứng. API Gateway cũng xử lý xác thực JWT và authorization.

## Microservices

### Auth Service
Xử lý đăng ký, đăng nhập và xác thực người dùng.
- Endpoint: `/auth/register` - Đăng ký tài khoản mới
- Endpoint: `/auth/login` - Đăng nhập và lấy JWT token

### Các service khác (sẽ phát triển sau)
- User Service: Quản lý thông tin người dùng
- Post Service: Quản lý bài đăng
- Notification Service: Xử lý thông báo
- Feed Service: Quản lý news feed
- Search Service: Tìm kiếm

## Contributing

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.
