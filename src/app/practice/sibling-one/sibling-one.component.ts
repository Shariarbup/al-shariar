import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent {

  age: number | undefined;

  @Output()
  ageEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  onChangeAge() {
    this.ageEventEmitter.emit(this.age);
  }

}
