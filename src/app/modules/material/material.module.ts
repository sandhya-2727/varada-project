import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const materialComponent = [
  MatTabsModule,
  MatBadgeModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatSnackBarModule
]


@NgModule({
  
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule { }
