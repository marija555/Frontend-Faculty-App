
import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { Departman } from 'src/app/models/departman';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges {


    displayedColumns = ['id', 'ime', 'prezime', 'brojIndeksa', 'status', 'departman',  'actions'];
    dataSource: MatTableDataSource<Student>;

    @Input() selektovanDepartman: Departman;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public studentService : StudentService ) { }

      ngOnInit(): void {

      }

      ngOnChanges() {
        if (this.selektovanDepartman.id) {
          debugger;
          this.loadData();
      }
    }


    public loadData() {
      this.studentService.getStudentSaDepartmana(this.selektovanDepartman.id)
        .subscribe(data => {
          this.dataSource = new MatTableDataSource(data);
          //pretraga po nazivu ugnježdenog objekta
          this.dataSource.filterPredicate = (data, filter: string) => {
            const accumulator = (currentTerm, key) => {
              return key === 'status' ? currentTerm + data.status.naziv : currentTerm + data[key];
            };
            const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) !== -1;
          };

          //sortiranje po nazivu ugnježdenog objekta
          this.dataSource.sortingDataAccessor = (data, property) => {
            switch (property) {
              case 'status': return data.status.naziv.toLocaleLowerCase();
              default: return data[property];
            }
          };

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });

    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLocaleLowerCase();
      this.dataSource.filter = filterValue;
    }
  }
