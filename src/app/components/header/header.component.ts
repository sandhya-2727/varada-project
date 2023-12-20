import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _router: Router,
              private _userDialog: MatDialog){}
  openServices(){
    this._router.navigate(['/services'])
  }
  register(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '50rem'
    dialogConfig.position = {right: '360px', top: '140px'}
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    this._userDialog.open(RegisterComponent, dialogConfig)
  }
}
