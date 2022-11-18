import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ErrorHandlerService,
  errorResponse,
} from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-error-default',
  templateUrl: './error-default.component.html',
  styleUrls: ['./error-default.component.scss'],
})
export class ErrorDefaultComponent implements OnInit {
  constructor(
    private serviceError: ErrorHandlerService,
    private router: Router
  ) {}

  errorMessage: errorResponse | undefined = {} as errorResponse;

  ngOnInit(): void {
    if (this.serviceError.getErrorMessage() === undefined) {
      this.router.navigateByUrl('/');
    } else {
      this.errorMessage = this.serviceError.getErrorMessage();
    }
  }
}
