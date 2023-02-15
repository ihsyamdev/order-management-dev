# order-management-dev

お勉強用の受注管理システム

## 初期構築

以下のコマンドを実行

```c
docker compose up -d
npm install
npx prisma migrate dev
npx prisma generate
npm run start:dev
```
