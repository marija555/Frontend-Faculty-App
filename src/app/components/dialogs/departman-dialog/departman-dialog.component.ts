import { FakultetService } from 'src/app/services/fakultet.service';
import { Fakultet } from './../../../models/fakultet';
import { DepartmanService } from 'src/app/services/departman.service';
import { Departman } from './../../../models/departman';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-departman-dialog',
  templateUrl: './departman-dialog.component.html',
  styleUrls: ['./departman-dialog.component.css']
})
export class DepartmanDialogComponent implements OnInit {
  public flag: number;
  fakulteti : Fakultet[];

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DepartmanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Departman,
    public departmanService: DepartmanService,
    public fakultetService: FakultetService
    ) { }

  ngOnInit(): void {
    this.fakultetService.getAllFakultet().subscribe(fakulteti =>
      this.fakulteti = fakulteti
    );
  }

  //za potvrdi na buttonu
  public add(): void {
    this.data.id = -1;
    this.departmanService.addDepartman(this.data);
    this.snackBar.open('Uspešno dodat departman: '+ this.data.naziv,'U redu', {
     duration: 2500

  });
  }

  public  update(): void {
     this.departmanService.updateDepartman(this.data);
     this.snackBar.open('Uspešno modifikovan departman: ' + this.data.naziv, 'U redu', {
      duration: 2500
    });
  }

  public delete() :void{
    this.departmanService.deleteDepartman(this.data.id);
    this.snackBar.open('Uspešno obrisan departman: ' + this.data.naziv, 'U redu', {
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
    return a.id == b.id;
  }


}
