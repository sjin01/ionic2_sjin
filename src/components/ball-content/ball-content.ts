import {Component, Input} from '@angular/core';


@Component({
  selector: 'components-ball-content',
  templateUrl: 'ball-content.html'
})
export class BallContentComponent {
  @Input() reds;
  @Input() blue:string;
  constructor() {
  }
}
