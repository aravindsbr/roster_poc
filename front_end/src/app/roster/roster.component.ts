import {Component, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material';
import * as XLSX from 'xlsx';
import { MyserviceService } from '../myservice.service';
import { SelectionModel } from '@angular/cdk/collections';

export interface UserData {

}

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})

export class RosterComponent implements OnInit {

  title = 'myapp1';
  filterValues = {}; //newly added for filter
  displayedColumns: string[] = ["name","phone_no","email","city","dob","status"]
  dataSource : MatTableDataSource<UserData>;
  filterSelectObj = []; //newly added for filter
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
  selection = new SelectionModel<UserData>(true, []);
  data: any;

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }

  constructor(private myservice: MyserviceService) {

  }
    // Above newly added

  ngOnInit() {
   
      this.myservice.getData().subscribe((result) => {   
         this.dataSource = new MatTableDataSource(<any>result);                    
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
    });                
  }

  resetFilters() {
    this.dataSource.filter = "";
  }

  
  //-------for Global filter--------.

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
     }


  /*name of the excel-file which will be downloaded. */ 
   fileName= 'Employee_Details_Specific.xlsx';  
   exportexcel(): void
      {
       /* table id is passed over here */   
       let element = document.getElementById('emp-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
      }	         
  
  fileName1= 'Employee_Details.xlsx';  
    exportexcel1(): void
        {
          /* table id is passed over here */   
          let item = document.getElementById('emp-table'); 
          const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.dataSource.data);
   
          /* generate workbook and add the worksheet */
          const wb: XLSX.WorkBook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
          /* save to file */
          XLSX.writeFile(wb, this.fileName1);
        }	 
}