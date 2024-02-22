import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidators } from './user-name.validators';
import { Passwordvalidator } from './password.validator';

@Component({
  selector: 'app-reactive-forms-two',
  templateUrl: './reactive-forms-two.component.html',
  styleUrls: ['./reactive-forms-two.component.css']
})
export class ReactiveFormsTwoComponent {

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName: ['Shariar', [Validators.required, Validators.minLength(3), forbiddenNameValidators(/password/)]],
    password: [''],
    confirmPassword: [''],
    address: ({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  }, {validator: Passwordvalidator})


  // registrationForm = new FormGroup({
  //   userName : new FormControl('Shariar'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  // loadAPImethod() {
  //   this.registrationForm.setValue({
  //     userName: 'Shariar',
  //     password: '1123456',
  //     confirmPassword: '123456',
  //     address: {
  //       city: 'Dahka',
  //       state: 'Dhaka',
  //       postalCode:'12345'
  //     }
  //   })
  // }

  
  // loadAPImethod() {
  //   this.registrationForm.patchValue({
  //     userName: '',
  //     password: '1123456',
  //     confirmPassword: '123456'
  //   })
  // }

  get userName() {
    return this.registrationForm.get('userName');
  }

}
