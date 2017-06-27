import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Ball} from '../../model/Ball';
import {HttpService} from "../../providers/HttpService";
import {Response} from "@angular/http";

@Component({
  selector: 'page-record',
  templateUrl: 'record.html'
})
export class RecordPage {

  balls

  constructor(public navCtrl: NavController,
              private httpService: HttpService) {
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
    return this.httpService.get('./assets/data/balls.json').map((res: Response) => res.json());
  }

}
