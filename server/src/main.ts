import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

const SWAGGER_ENVS = ['development', 'production'];

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  if (SWAGGER_ENVS.includes(process.env.NODE_ENV)) {
    app.use(['/api/docs', '/api/docs-json'], basicAuth({
      challenge: true,
      users: {
        [process.env.VITE_SWAGGER_USER]: process.env.VITE_SWAGGER_PASSWORD,
      },
    }));
  }

  // TODO: create and use SWAGGER_CONFIG.title etc
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

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
