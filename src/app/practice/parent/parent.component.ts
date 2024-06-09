import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  father: number = 0;
  mother: number = 0;
  brother: number = 0;
  sister: number = 0;

  gender: string | undefined;

  onChangeGenderEventEmitter(value: string) {
    this.gender = value;
  }
}
