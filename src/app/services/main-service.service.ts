import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { errorHandler } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  headers = new HttpHeaders()
    .set('Access-Control-Allow-Methods', '*')
    .set('Access-Control-Allow-Origin', '*')
    .set('X-Auth-Token', '19cd7491265e43b89c6019f2652b2392');
  //.set('Access-Control-Allow-Headers', 'X-Auth-Token, x-response-control');

  constructor(private http: HttpClient) {}

  getTable(competition: string, season: string): Observable<any> {
    return this.http
      .get<any>(
        '/api/v4/competitions/' + competition + '/standings?season=' + season,
        {
          headers: this.headers,
        }
      )
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...');
          return errorHandler(err);
        })
      );
  }
  getEliminatory(competition: string): Observable<any> {
    return this.http
      .get<any>('/api/v4/competitions/' + competition + '/standings', {
        headers: this.headers,
      })
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...');
          return errorHandler(err);
        })
      );
  }

  getCompetitions(): Observable<any> {
    return this.http
      .get<any>('/api/v4/competitions/', {
        headers: this.headers,
      })
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...');
          return errorHandler(err);
        })
      );
  }

  getTeam(id: string): Observable<any> {
    return this.http
      .get<any>('/api/v4/teams/' + id, {
        headers: this.headers,
      })
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...');
          return errorHandler(err);
        })
      );
  }

  getAllTeams(id: string | undefined): Observable<any> {
    if (id === undefined) {
      id = '10';
    }
    return this.http
      .get<any>('/api/v4/teams?limit=30&offset=' + id, {
        headers: this.headers,
      })
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          return errorHandler(err);
        })
      );
  }

  getTeamMatchestatus(
    id: string,
    status: 'SCHEDULED' | 'FINISHED'
  ): Observable<any> {
    return this.http
      .get<any>('/api/v4/teams/' + id + '/matches?status=' + status, {
        headers: this.headers,
      })
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          return errorHandler(err);
        })
      );
  }

  getTeamMatches(id: string): Observable<any> {
    return this.http
      .get<any>('/api/v4/teams/' + id + '/matches', {
        headers: this.headers,
      })
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          return errorHandler(err);
        })
      );
  }

  getTopScorers(competition: string, season: string): Observable<any> {
    return this.http
      .get<any>(
        '/api/v4/competitions/' + competition + '/scorers?season=' + season,
        {
          headers: this.headers,
        }
      )
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          return errorHandler(err);
        })
      );
  }
}
