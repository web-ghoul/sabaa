import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';

let cachedApp: NestExpressApplication;

export default async (req: any, res: any) => {
  if (!cachedApp) {
    cachedApp = await NestFactory.create<NestExpressApplication>(AppModule);
    cachedApp.setGlobalPrefix('api');
    cachedApp.enableCors({
      origin: true,
      credentials: true,
    });
    await cachedApp.init();
  }

  const instance = cachedApp.getHttpAdapter().getInstance();
  return instance(req, res);
};
