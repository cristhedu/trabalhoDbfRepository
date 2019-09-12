import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TrabalhoDbfSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TrabalhoDbfSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TrabalhoDbfSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrabalhoDbfSharedModule {
  static forRoot() {
    return {
      ngModule: TrabalhoDbfSharedModule
    };
  }
}
