import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { CustomErrorFilter } from './filters/CustomErrorFilter';

export async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useGlobalFilters(new CustomErrorFilter());
  // app.useStaticAssets(join(__dirname, '../..', 'upload'), {
  //   prefix: '/api/upload/',
  // });
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: [
      process.env.SITE_URL,
      'http://localhost:5173',
      'http://localhost:3000',
    ],
    credentials: true,
  });
  // app.use(csurf());
  const config = new DocumentBuilder()
    .setTitle('Sabaa API')
    .setDescription('The Sabaa API description')
    .setVersion('1.0')
    .addServer(process.env.SITE_URL || `http://localhost:3000`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('ApiDoc', app, document);

  if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    await app.listen(3000);
  }

  return app;
}

if (!process.env.VERCEL) {
  bootstrap();
}
