import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';


import {RecordDetailPage} from './detail/record-detail';

@NgModule({
  imports: [IonicModule],
  declarations: [RecordDetailPage],
  entryComponents: [RecordDetailPage],
  providers: [],
  exports: [IonicModule]
})
export class RecordModule {

}
