import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import appRoutes from './routes';
import { HomeComponent } from './pages/home/home.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [HomeComponent]
})
export class RoutesModule { }
