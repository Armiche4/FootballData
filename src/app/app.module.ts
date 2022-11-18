import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { Error403Component } from './components/errorComponents/error403/error403.component';
import { ErrorDefaultComponent } from './components/errorComponents/error-default/error-default.component';
import { TeamMatchesComponent } from './components/team-matches/team-matches.component';
import { DateTransformPipe } from './pipes/date-transform.pipe';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TableTeamsComponent,
    HeaderComponent,
    TeamDetailComponent,
    TeamListComponent,
    Error403Component,
    ErrorDefaultComponent,
    TeamMatchesComponent,
    DateTransformPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateloader,
        deps: [HttpClient],
      },
      defaultLanguage: 'es',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateloader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
