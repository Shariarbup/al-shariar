import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User("", "itmasjoy@gmail.com", "01968385155", "Topic", "morning", true);

  validateTopic() {

  }

  onSubmit(userForm: any) {
    // console.log(this.userModel);
    console.log(userForm)
  }

}
