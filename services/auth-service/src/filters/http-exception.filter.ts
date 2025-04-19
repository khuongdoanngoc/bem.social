import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    this.logger.error(exception);
    
    // Nếu exception là HttpException
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      
      // Format response object để tương thích với API Gateway
      const errorObj = {
        statusCode: status,
        error: exception.name
      };
      
      // Handle both string and object responses
      if (typeof exceptionResponse === 'string') {
        errorObj['message'] = exceptionResponse;
      } else if (typeof exceptionResponse === 'object') {
        Object.assign(errorObj, exceptionResponse);
      }
      
      this.logger.debug(`Throwing RpcException: ${JSON.stringify(errorObj)}`);
      throw new RpcException(errorObj);
    } else {
      // Nếu không phải HttpException, trả về 500 Internal Server Error
      const errorObj = {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: exception instanceof Error ? exception.name : 'UnknownError',
        message: exception instanceof Error ? exception.message : 'Internal server error'
      };
      
      this.logger.debug(`Throwing generic RpcException: ${JSON.stringify(errorObj)}`);
      throw new RpcException(errorObj);
    }
  }
} 