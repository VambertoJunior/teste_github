import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatriculaPipe } from './matricula.pipe';
import { TelefonePipe } from './telefone.pipe';



@NgModule({
  declarations: [
    MatriculaPipe,
    TelefonePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
