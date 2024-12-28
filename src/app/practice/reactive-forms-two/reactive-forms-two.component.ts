import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidators } from './user-name.validators';
import { Passwordvalidator } from './password.validator';
import { PortfolioServiceService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-reactive-forms-two',
  templateUrl: './reactive-forms-two.component.html',
  styleUrls: ['./reactive-forms-two.component.css']
})
export class ReactiveFormsTwoComponent implements OnInit{
  registrationForm!: FormGroup;

  get email () {
    return this.registrationForm.get('email');
  }

  get phone () {
    return this.registrationForm.get('phone');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  get alternatePhones() {
    return this.registrationForm.get('alternatePhones') as FormArray;
  }

  addAlternatePhones() {
    this.alternatePhones.push(this.fb.control(''));
  }

  addAlternateEmails() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private portfolioService: PortfolioServiceService){}

  ngOnInit() {
    
  this.registrationForm = this.fb.group({
    userName: ['Shariar', [Validators.required, Validators.minLength(3), forbiddenNameValidators(/password/)]],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    password: [''],
    confirmPassword: [''],
    address: ({
      city: [''],
      state: [''],
      postalCode: ['']
    }),
    alternateEmails: this.fb.array([]),
    alternatePhones: this.fb.array([])
  }, {validator: Passwordvalidator})


  }

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

  onSubmit() {
    console.log(this.registrationForm.value);
    console.log(this.registrationForm.value.alternatePhones);
    this.portfolioService.register(this.registrationForm.value).subscribe(
      res=> console.log("Success!", res),
      err => console.log("error!", err)
    );
  }

}
