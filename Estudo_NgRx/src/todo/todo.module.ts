import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// component
import * as fromComponents from './component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromComponents.TarefasComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [],
  declarations: [...fromComponents.component],
  exports: [...fromComponents.component]
})

export class TodoModule { }
