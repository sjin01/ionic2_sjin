import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-record-detail',
  templateUrl: 'record-detail.html'
})
export class RecordDetailPage {

  constructor(public navCtrl:NavController,
              public navParams: NavParams) {
    console.log(navParams.data);
    // 这个页面主要完成4件事: 1 展示上期推荐杀号; 2展示本期开号; 3 展示本期推荐和杀号; 4 根据本期开好,印证上期推荐和杀号的可信度

  }

}
