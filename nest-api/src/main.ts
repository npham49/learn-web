import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useRequestLogging } from './middleware/request-logging';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'verbose'],
  });
  app.setGlobalPrefix('api');
  app.enableCors();
  useRequestLogging(app);
  await app.listen(+process.env.PORT || 3000);
}
bootstrap().then(() =>
  console.log('Service listening 👍: ', +process.env.PORT || 3000),
);
