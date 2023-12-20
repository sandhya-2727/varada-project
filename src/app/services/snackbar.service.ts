import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor( private _snackbarService: MatSnackBar) { }

  openSnackbar(msg: string, action: string){
    if(action === 'error'){
      this._snackbarService.open(msg, '', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: ['error-snackbar']
      })
    }
    else{
      this._snackbarService.open(msg, '', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 5000,
        panelClass: ['success-snackbar']
      })
    }
  }
}
