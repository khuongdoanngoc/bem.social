# Auth Project

Hệ thống quản lý xác thực người dùng được xây dựng bằng NextJS và NestJS.

## Công nghệ sử dụng

### Frontend
- NextJS 14
- TypeScript
- Tailwind CSS
- React Query
- Zustand (State Management)

### Backend
- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Bcrypt

## Cài đặt

### Yêu cầu hệ thống
- Node.js 18+ 
- PostgreSQL
- pnpm/npm/yarn

### Các bước cài đặt

1. Clone repository
```bash
git clone <repository-url>
cd auth-project
```

2. Cài đặt dependencies cho frontend
```bash
cd client
pnpm install
```

3. Cài đặt dependencies cho backend
```bash
cd server
pnpm install
```

4. Cấu hình môi trường
   - Copy file `.env.example` thành `.env` trong cả hai thư mục `client` và `server`
   - Cập nhật các biến môi trường theo cấu hình của bạn

5. Khởi tạo database
```bash
cd server
npx prisma migrate dev
```

## Chạy ứng dụng

### Development mode

1. Chạy backend
```bash
cd server
pnpm run dev
```
Backend sẽ chạy tại `http://localhost:4000`

2. Chạy frontend
```bash
cd client
pnpm run dev
```
Frontend sẽ chạy tại `http://localhost:3000`

### Production mode

1. Build và chạy backend
```bash
cd server
pnpm run build
pnpm start
```

2. Build và chạy frontend
```bash
cd client
pnpm run build
pnpm start
```

## Tính năng

- [ ] Đăng ký tài khoản
- [ ] Đăng nhập
- [ ] Xác thực hai yếu tố (2FA)
- [ ] Quản lý profile
- [ ] Quản lý phân quyền
- [ ] Reset mật khẩu

## Cấu trúc thư mục

```
auth-project/
├── client/               # Frontend NextJS
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/      # Next.js pages
│   │   ├── hooks/      # Custom hooks
│   │   ├── store/      # State management
│   │   └── types/      # TypeScript types
│   └── package.json
│
├── server/              # Backend NestJS
│   ├── src/
│   │   ├── modules/    # Feature modules
│   │   ├── common/     # Shared resources
│   │   ├── config/     # Configuration
│   │   └── main.ts     # Entry point
│   ├── prisma/         # Database schema
│   └── package.json
│
└── shared/             # Shared resources
    └── types/          # Shared TypeScript types
```

## Contributing

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.
