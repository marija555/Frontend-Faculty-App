import { StatusDialogComponent } from './../dialogs/status-dialog/status-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { StatusService } from './../../services/status.service';
import { Status } from './../../models/status';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {


  displayedColumns =['id', 'naziv','oznaka', 'actions'];
  dataSource: MatTableDataSource<Status>;

  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort: MatSort;

  constructor(private statusService: StatusService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('Inicijalizacija Status komponente!');
    this.loadData();
  }

 public loadData(){
     this.statusService.getAllStatus().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     });
  }

  public openDialog(flag:number , id?:number, naziv?:string, oznaka?: string) {
    const dialogRef = this.dialog.open(StatusDialogComponent,
            {data: { id, naziv, oznaka}}
      );

      dialogRef.componentInstance.flag = flag;

      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.loadData();
        }
      })

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
}
