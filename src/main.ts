import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // CORS設定
  const corsOptions: CorsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  }
  app.enableCors(corsOptions)

  // Swaggerのオプション設定
  const options = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API endpoint documentation')
    .setVersion('0.0.1')
    .build()

  // Swaggerドキュメントを生成・表示するためのエンドポイントを作成
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
bootstrap()
