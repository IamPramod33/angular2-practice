import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HttpModule } from "@angular/http";

import { DataTableModule } from 'angular2-datatable';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    HttpModule
  ],
  declarations: [UsersComponent],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
