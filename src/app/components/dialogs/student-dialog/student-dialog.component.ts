import { StatusService } from './../../../services/status.service';
import { Student } from './../../../models/student';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Status } from './../../../models/status';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from 'src/app/services/student.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

    statusi: Status[];
    public flag: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Student ,
    public studentService: StudentService,
    public statusService: StatusService
    ) { }

  ngOnInit(): void {
    this.statusService.getAllStatus().subscribe(statusi =>
      this.statusi = statusi
    );

}

//za potvrdi na buttonu
public add(): void {
  this.data.id = -1;
  this.studentService.addStudent(this.data);
  this.snackBar.open('Uspešno dodat student' , 'U redu', {
   duration: 2500

});
}

public  update(): void {
   this.studentService.updateStudent(this.data);
   this.snackBar.open('Uspešno modifikovan student ' , 'U redu', {
    duration: 2500
  });
}

public delete() :void{
  this.studentService.deleteStudent(this.data.id);
  this.snackBar.open('Uspešno obrisan student'  , 'U redu', {
    duration: 2500
  });
}

//Odustani button
public cancel():void {
  this.dialogRef.close();
  this.snackBar.open('Odustali ste', 'U redu', {
    duration: 500
  });
}


compareTo(a, b) {
  return a.id === b.id;
}
}
