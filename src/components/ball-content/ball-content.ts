import {Component, Input} from '@angular/core';


@Component({
  selector: 'components-ball-content',
  template: `<div class="components-ball-content">
            <span *ngFor="let redBall of reds">{{redBall}}</span>
            <span>{{blue}}</span>
          </div>
          `
})
export class BallContentComponent {
  @Input() reds;
  @Input() blue:string;

  constructor() {
  }
}
