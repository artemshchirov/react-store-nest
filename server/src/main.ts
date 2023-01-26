import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';
import * as bodyParser from 'body-parser';



const SWAGGER_ENVS = ['development', 'production'];

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  // TODO config secure cors and import whitelist domains from env!!!
  const allowedDomains = ['http://localhost:3000', 'http://localhost:4000', 'http://localhost:6000']
  app.enableCors({
    // allowedHeaders: ['Content-Type, Authorization'],
    // methods: ['POST', 'PUT', 'DELETE', 'GET'],
    origin: allowedDomains,
    credentials: true,
  })

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: false }));


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
}


bootstrap();
