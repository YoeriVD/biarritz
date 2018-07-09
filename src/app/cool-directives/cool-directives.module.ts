import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from './focus/focus.directive';
import { ZoomDirective } from './zoom/zoom.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FocusDirective, ZoomDirective],
  exports: [FocusDirective, ZoomDirective]
})
export class CoolDirectivesModule { }
