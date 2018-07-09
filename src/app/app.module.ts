import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoolPipesModule } from './cool-pipes/cool-pipes.module';
import { HomeModule } from './home/home.module';

registerLocaleData(locale);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    NgbModule.forRoot(), CoolPipesModule,
    AppRoutingModule, HomeModule
  ],
  providers: [{
    provide : LOCALE_ID, useValue: 'fr-FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
