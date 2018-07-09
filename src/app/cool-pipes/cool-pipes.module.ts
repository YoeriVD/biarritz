import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { TakePipe } from './take.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchPipe, TakePipe],
  exports: [SearchPipe, TakePipe]
})
export class CoolPipesModule { }
