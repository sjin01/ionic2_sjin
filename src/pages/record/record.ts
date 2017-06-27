import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Ball} from '../../model/Ball';
import {HttpService} from "../../providers/HttpService";
import {Response} from "@angular/http";

import {RecordDetailPage} from './detail/record-detail';

@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage {

  balls;

  constructor(public navCtrl:NavController,
              private httpService:HttpService) {
    this.getObj().subscribe(data => {
      this.balls = data;
    });
    console.log(this.balls);
    /*this.httpService.get('./assets/data/fileData.json').map((res: Response) => res.json()).subscribe(res => {
     if(res.success){
     for(let fileObj of res.data){
     this.fileObjList.push(<FileObj>{'thumbPath':fileObj.base64,'origPath':fileObj.base64});
     }
     }
     });*/
  }

  getObj():Observable<Ball> {
    return this.httpService.get('./assets/data/balls.json').map((res:Response) => res.json());
  }

  // 三分区
  get3fq(item) {
    var fq1 = 0, fq2 = 0, fq3 = 0;
    item.redBalls.forEach(red => {
      var val:number = red;
      if (val <= 11) {
        fq1++;
      } else if (val <= 22) {
        fq2++;
      } else if (val <= 33) {
        fq3++;
      }
    });
    return fq1 + ':' + fq2 + ':' + fq3;
  }

  // 大小比
  getDx(item) {
    var d = 0, x = 0;
    item.redBalls.forEach(red => {
      var val:number = red;
      if (val < 16) {
        x++;
      } else if (val > 16) {
        d++;
      }
    });
    return x + ':' + d;
  }

  // 奇偶比
  getJo(item) {
    var j = 0, o = 0;
    item.redBalls.forEach(red => {
      var val:number = red;
      if (val % 2 == 0) {
        o++;
      } else {
        j++;
      }
    });
    return j + ':' + o;
  }

  goDetail (index){
    this.navCtrl.push(RecordDetailPage, {cur:this.balls[index], prev:this.balls[index+1]});
  }
}
