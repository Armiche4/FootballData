import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private router: Router) {}

  errorResponse: undefined | errorResponse;

  errorHandler(err: HttpErrorResponse) {
    return of(err.error);
  }

  goToPageError(err: errorInterface) {
    switch (err.errorCode) {
      case 403:
        this.setErrorMessage(
          err,
          'No puedes acceder al id',
          'Hay que pagar para acceder; hazme un bizum , prueba otro equipo si no'
        );
        this.router.navigateByUrl('/ErrorPage403');
        break;
      case 429:
        this.router.navigateByUrl('/ErrorPage');
        this.setErrorMessage(
          err,
          'Has hecho muchas peticiones',
          'Hay que pagar para acceder tanto ; hazme un bizum , espera un poco e intentalo de nuevo'
        );
        break;
      default:
        this.setErrorMessage(
          err,
          'Algo ha salido mal',
          'Este es un mensaje de error generico, que esperabas una pagina bien hecha ?'
        );
        this.router.navigateByUrl('/ErrorPage');
    }
  }

  setErrorMessage(err: errorInterface, title: string, message: string) {
    this.errorResponse = {
      title: title,
      message: message,
      error: err,
    };
  }

  getErrorMessage(): undefined | errorResponse {
    return this.errorResponse;
  }
}
export function errorHandler(err: HttpErrorResponse) {
  return of(err.error);
}

export interface errorInterface {
  message: string;
  errorCode: number;
}

export interface errorResponse {
  title: string;
  message: string;
  error: errorInterface;
}
