import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { throwError } from 'rxjs';

@Catch()
export class RpcExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(RpcExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    this.logger.error(exception);
    
    // Check if the context is RPC
    if (host.getType() === 'rpc') {
      // For RPC context
      return throwError(() => exception);
    }

    // For HTTP context (fallback)
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    
    // Nếu là lỗi từ RPC service, xử lý riêng
    if (exception.message && typeof exception.message === 'object') {
      const rpcError = exception.message;
      
      // Check if we have a valid statusCode in the error
      const statusCode = rpcError.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
      
      // Extract error message 
      let errorResponse;
      if (rpcError.message && typeof rpcError.message === 'object') {
        errorResponse = rpcError.message;
      } else {
        errorResponse = {
          statusCode,
          message: rpcError.message || 'Internal server error',
        };
      }
      
      return response.status(statusCode).json(errorResponse);
    }
    
    // Fallback error handling for other types of errors
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
      error: exception instanceof Error ? exception.message : 'Unknown error',
    });
  }
} 