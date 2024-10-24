import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  LoginForm: FormGroup;
  password: any;
  confirmPwd: any;
  pwdError: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      mobile: new FormControl(['']),
      email: new FormControl(['']),
      pwd: new FormControl(['']),
      confirmpwd: new FormControl(['']),
    });
  }
  passwrodValidator() {
    this.password = this.LoginForm.get('pwd').value;
    this.confirmPwd = this.LoginForm.get('confirmpwd').value;
    if (this.password != this.confirmPwd) {
      this.pwdError = true;
    }
  }
}
