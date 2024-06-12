import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling-container',
  templateUrl: './sibling-container.component.html',
  styleUrls: ['./sibling-container.component.css']
})
export class SiblingContainerComponent {

  ageFromSiblingOne: number | undefined;
  
  onChangeAgeEmitter(value: number) {
    this.ageFromSiblingOne = value;
  }

}
