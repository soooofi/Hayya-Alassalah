import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './signup.page.form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form : FormGroup;
  constructor(private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).crateForm();
  }
  signup() {
    this.router.navigate(['home']);
  }

}


