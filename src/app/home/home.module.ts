import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SdUiModule } from '@sdworx/sd-components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export * from './home/home.component';

@NgModule({
  imports: [
    CommonModule, SdUiModule, NgbModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
