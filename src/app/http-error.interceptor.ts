import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FlashMessageService } from './flash-message/flash-message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly $flashMessageService: FlashMessageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.$flashMessageService.add(err.message);

          return throwError(err);
        })
      );
  }
}
