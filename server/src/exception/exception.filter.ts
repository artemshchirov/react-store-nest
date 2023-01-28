import {
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { Request, Response } from 'express';
import {config} from '../config'
import * as Sentry from '@sentry/node';



export class AppExceptionFilter implements ExceptionFilter {
  sentry: any;
  constructor() {
    this.sentry = Sentry;
    this.sentry.init({
      dsn: config().sentry.dsn,
      debug: config().sentry.debug,
      environment: config().app.env,
      release: config().app.version,
      tracesSampleRate: 1.0,
      integrations: [new Sentry.Integrations.Http({ tracing: true })]
    });
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    let resBody: any = {};
    let status: number = HttpStatus.INTERNAL_SERVER_ERROR;
    let request: any;
    let response: any;

    try {
      const ctx = host.switchToHttp();
      response = ctx.getResponse<Response>();
      request = ctx.getRequest<Request>();
      let errorMessage = exception.message || 'Internal server error';

      try {
        status = exception.getStatus();
      } catch (err) {
        status = HttpStatus.INTERNAL_SERVER_ERROR;
      }

      const exceptionResponse: any = exception.getResponse();
      if (exceptionResponse) {
        if (exceptionResponse.message && Array.isArray(exceptionResponse.message)) {
          errorMessage = exceptionResponse.message[0];
        } else {
          errorMessage = exceptionResponse.message;
        }
      }

      resBody = {
        message: errorMessage,
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url
      };
    } catch (err) {
      resBody = {
        message: exception.message || 'Internal server error',
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: 'unknown'
      };
    }

    if (![HttpStatus.FORBIDDEN, HttpStatus.UNAUTHORIZED, HttpStatus.NOT_FOUND].includes(status)) {
      this.sentry.withScope(function (scope: any) {
        if (request) {
          scope.setTag('method', request.method);
          scope.setTag('hostname', request.hostname);
          scope.setTag('url', request.url);
          scope.setTag('status', status);
          scope.setContext('response body', resBody);
        }
        Sentry.captureException(exception);
      });
    }

    response.status(status).json(resBody);
  }
}
