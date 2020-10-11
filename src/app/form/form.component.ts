import { Component, OnInit } from '@angular/core';
import {Client} from "./client";
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup

  emailMessage:string;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      phone: '',
      password: ['', [Validators.required, Validators.minLength(8)]],
      addresses: this.fb.array([this.buildAddress()])
    });
  }


buildAddress(): FormGroup {
    return this.fb.group({
      Address: ['', Validators.required],
      Ville: '',
      CodePostal: ''
    });
  }


  save(): void {
    console.log(this.form);
    console.log('Saved: ' + JSON.stringify(this.form.value));
  }


}
