import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.css']
})
export class SiblingTwoComponent {
  @Input()
  ageFromSiblingOne : number | undefined;

}
