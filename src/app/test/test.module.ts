import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class TestModule { }
