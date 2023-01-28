import { LogLevel } from '@nestjs/common';
import packageJson from '../package.json';



export const config = (overrides?: {
  db?: { name?: string; };
}) => {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const app = {
    // TODO import values from packageJson
    name: 'server',
    version: '0.0.1',
    env: nodeEnv
  };
  const db = {
    host: process.env.VITE_POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.VITE_POSTGRES_PORT || '27017'),
    name: overrides?.db?.name || process.env.VITE_POSTGRES_DB || 'app',
    username: process.env.VITE_SWAGGER_USERNAME || 'postgres',
    password: process.env.VITE_SWAGGER_PASSWORD || 'postgres'
  };
  const sentry = {
    dsn: process.env.VITE_SENTRY_DSN || '',
    debug: nodeEnv === 'development' ? true : false,
    logLevels: ['log', 'error', 'warn', 'debug', 'verbose'] as LogLevel[] // 'log' | 'error' | 'warn' | 'debug' | 'verbose';
  };
  // const imageKit = {
  //   publicKey: process.env['IMAGEKIT_PUBLIC_KEY'] || 'NOT_PROVIDED',
  //   privateKey: process.env['IMAGEKIT_PRIVATE_KEY'] || 'NOT_PROVIDED',
  //   urlEndpoint: process.env['IMAGEKIT_URL_ENDPOINT'] || 'NOT_PROVIDED',
  //   folder: nodeEnv
  // };

  return {
    app,
    // db,
    sentry,
    // imageKit,
    // serverPort: process.env.SERVER_PORT as string,
    // jwtSecret: (process.env.JWT_SECRET as string) || 'secret',
    // exchangeRateApiKey: process.env.EXCHANGE_RATE_API_KEY as string
  };
};
