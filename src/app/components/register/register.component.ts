import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { globalProperties } from 'src/app/shared/globalProperties';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  public responseMsg: any;
  constructor(private _formBuilder: FormBuilder,
              private _ngxService: NgxUiLoaderService,
              private _userService: UserService,
              private _dialogRef: MatDialogRef<RegisterComponent>,
              private _snackBar: SnackbarService,
              private _router: Router){

  }
  
  public registerForm: any = FormGroup

  ngOnInit(): void {
   this.registerForm = this._formBuilder.group({
    username: [null, [Validators.required, Validators.pattern(globalProperties.nameRegx)]],
    password: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.pattern(globalProperties.emailRegx)]],
    cnumber: [null, [Validators.required, Validators.pattern(globalProperties.contactNumberRegex)]]
   })
  }

  onRegister(){
    this._ngxService.start()
    var formData = this.registerForm.value
    var data = {
      username: formData.username,
      cnumber: formData.cnumber,
      email: formData.email,
      password: formData.password
    }
    console.log("form data:", data);
    this._userService.register(data).subscribe((res: any) =>{
      this._ngxService.stop()
      this._dialogRef.close()
      this.responseMsg = res?.message
      console.log("response msg:", this.responseMsg)
      this._snackBar.openSnackbar(this.responseMsg, '')
      this._router.navigate(['/'])
    },(err => {
      this._ngxService.stop()
      if(err.error?.message){
        this.responseMsg = err.error?.message
      }
      else{
        this.responseMsg = globalProperties.genericError
      }
      this._snackBar.openSnackbar(this.responseMsg, globalProperties.error)
    }))
  }
}
