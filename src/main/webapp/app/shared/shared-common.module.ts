import { NgModule } from '@angular/core';

import { TrabalhoDbfSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TrabalhoDbfSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TrabalhoDbfSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TrabalhoDbfSharedCommonModule {}
