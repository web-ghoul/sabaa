import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CustomErrorFilter } from './filters/CustomErrorFilter';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new CustomErrorFilter());
  app.useStaticAssets(join(__dirname, '../..', 'upload'), {
    prefix: '/api/upload/',
  });
  app.setGlobalPrefix('api');
  app.enableCors();
  // app.use(csurf());
  const config = new DocumentBuilder()
  .addServer(`http://localhost:3000`)
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('ApiDoc', app, document);
  await app.listen(3000);
}
bootstrap();
