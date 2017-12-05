import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';
import { NgModule } from '@angular/core';
import { OtherModule } from './other/other.module';
import { OtherService } from './other/other.service';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { UsersModule } from './routes/pages/users/users.module';

export class AppService {
  constructor() {
    console.log('AppService constructor.');
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    OtherModule,
    UsersModule
  ],
  providers: [
    AppService,
    OtherService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [],
      useFactory: function () {
        return (runblock);
        function runblock() {
          console.group('Run Blocks.');
          console.log('App module run block.');
          console.groupEnd();
        }
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appService: AppService, otherSerivce: OtherService) {

    console.group('OtherModule Constructor.');
    console.log(otherSerivce);
    console.groupEnd();

  }

}
