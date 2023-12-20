import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TableService } from 'src/app/services/table.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  employeeTableData: any ;
  displayedColumns: string[] = ['EmpId', 'EmpName', 'EmpSalary', 'EmpRole', 'EmpPerformance'];
  
 

  @ViewChild(MatSort) sort : MatSort ;
  @ViewChild(MatPaginator) paginator : MatPaginator ;


  constructor(private _tableService: TableService){}
  

  ngOnInit(): void {
   this._tableService.getTableData().subscribe((response : any) =>{
    console.log(response)
          this.employeeTableData = new MatTableDataSource(response)
          this.employeeTableData.paginator = this.paginator
          this.employeeTableData.sort = this.sort
    })

    
  }


  // ngAfterViewInit(){
  //   this.dataSource.paginator = this.paginator
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(filterValue: string){
    this.employeeTableData.filter = filterValue.trim().toLowerCase();
  }
}
