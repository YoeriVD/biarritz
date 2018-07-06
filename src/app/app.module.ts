import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { TakePipe } from './take.pipe';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/fr';

registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent, TakePipe, SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [{
    provide : LOCALE_ID, useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
