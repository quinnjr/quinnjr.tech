import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public accountForm = this.$fb.group({
    currentPassword: ['', [ Validators.required, Validators.minLength(8)]],
    newPassword: ['', [ Validators.required, Validators.minLength(8) ]],
    newPasswordConfirm: ['', [ Validators.required, Validators.minLength(8) ]]
  });

  public accountProfileForm = this.$fb.group({

  });

  constructor(
    private readonly $fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public onSubmitPassword() {

  }

  public onSubmitOTP() {

  }

  public onSubmitProfile() {

  }

}
