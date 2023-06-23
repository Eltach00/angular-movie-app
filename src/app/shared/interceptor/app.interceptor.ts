import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpContextToken,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const SHOULD_NOT_HANDLE_ERROR = new HttpContextToken<boolean>(
  () => false
);

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.context.get(SHOULD_NOT_HANDLE_ERROR)) {
      console.log('here');
    }
    return next.handle(req);
  }
}
