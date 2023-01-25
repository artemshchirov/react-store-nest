import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import express from 'express';
import { Logger } from '@nestjs/common';
import { CorsMiddleware } from './cors/cors.middleware';
import { OriginValidationService } from './cors/origin.validation.service';



const SWAGGER_ENVS = ['development', 'production'];

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  // TODO config secure cors!!!
  app.enableCors()

  // TODO
  // app.use(express.json({ limit: '50mb' }));
  // app.use(express.urlencoded({ limit: '50mb' }));


  // TODO refactor
  app.use(new CorsMiddleware(new OriginValidationService()).use);


  if (SWAGGER_ENVS.includes(process.env.NODE_ENV)) {
    app.use(['/api/docs', '/api/docs-json'], basicAuth({
      challenge: true,
      users: {
        [process.env.VITE_SWAGGER_USER]: process.env.VITE_SWAGGER_PASSWORD,
      },
    }));
  }


  // TODO create and use SWAGGER_CONFIG.title etc
  const config = new DocumentBuilder()
    .setTitle('Online store NestJS backend')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag(`localhost:${PORT}/api/docs#`)
    .addBearerAuth({
      type: "http",
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Here enter JWT Token with bearer format like "Bearer {token}"'
    }, 'access-token')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);



  // TODO
  // app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new AppExceptionFilter());

  await app.listen(PORT, () =>
    Logger.log(
      `Server running on http://localhost:${PORT}`,
      'Bootstrap'
    )
  );

  // TODO
  // await app.listen(config().serverPort, () => {
  //   Logger.log(
  //     `Server running on http://localhost:${config().serverPort}`,
  //     'Bootstrap'
  //   );
  // });
}

bootstrap();
