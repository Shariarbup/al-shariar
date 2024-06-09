import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input()
    fatherAge: number | undefined;

    @Input()
    motherAge: number | undefined;

    @Input()
    brotherAge: number | undefined;

    @Input()
    sisterAge: number | undefined;

    gender: string | undefined;

    @Output()
    genderEventEmitter: EventEmitter<string> = new EventEmitter<string>();

    onChangeGender() {
      this.genderEventEmitter.emit(this.gender);
    }
}
