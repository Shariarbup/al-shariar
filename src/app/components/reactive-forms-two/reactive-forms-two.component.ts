import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-two',
  templateUrl: './reactive-forms-two.component.html',
  styleUrls: ['./reactive-forms-two.component.css']
})
export class ReactiveFormsTwoComponent {

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName: ['Shariar'],
    password: [''],
    confirmPassword: [''],
    address: ({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  })


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

  
  loadAPImethod() {
    this.registrationForm.patchValue({
      userName: 'Shariar',
      password: '1123456',
      confirmPassword: '123456'
    })
  }

}
