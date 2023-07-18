import { EntityNotFoundError } from 'src/errors/entity-not-found.error';
import {
  NestInterceptor,
  ExecutionContext,
  Injectable,
  NotFoundException,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

//https://codesandbox.io/embed/7zw47o8961?fontsize=14&module=%2Fsrc%2Fapp.controller.ts
//https://www.appsloveworld.com/nodejs/100/5/what-is-the-nestjs-error-handling-approach-business-logic-error-vs-http-error
//https://medium.com/@enguerrandpp/10-common-mistakes-to-avoid-when-using-nest-js-ea96f5f460b0s
@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // stream$ is an Observable of the controller's result value
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof EntityNotFoundError) {
          throw new NotFoundException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
