import { NgModule } from '@angular/core';

import { OtherService } from './other.service';


@NgModule({
  providers: [OtherService]
})
export class OtherModule {
  constructor(otherSerivce: OtherService) {

    console.group('OtherModule Constructor.');
    console.log(otherSerivce);
    console.groupEnd();

  }
}
