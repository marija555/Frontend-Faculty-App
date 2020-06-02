import { MatSnackBar } from '@angular/material/snack-bar';
import { FakultetService } from 'src/app/services/fakultet.service';
import { Fakultet } from './../../../models/fakultet';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fakultet-dialog',
  templateUrl: './fakultet-dialog.component.html',
  styleUrls: ['./fakultet-dialog.component.css']
})
export class FakultetDialogComponent implements OnInit {

  public flag: number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<FakultetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Fakultet,
    public fakultetService: FakultetService) { }

  ngOnInit(): void {
  }

  //za potvrdi na buttonu
  public add(): void {
    this.data.id = -1;
    this.fakultetService.addFakultet(this.data);
    this.snackBar.open('Uspešno dodat fakultet: '+ this.data.naziv,'U redu', {
     duration: 2500

  });
  }

  public  update(): void {
     this.fakultetService.updateFakultet(this.data);
     this.snackBar.open('Uspešno modifikovan fakultet: ' + this.data.naziv, 'U redu', {
      duration: 2500
    });
  }

  public delete() :void{
    this.fakultetService.deleteFakultet(this.data.id);
    this.snackBar.open('Uspešno obrisan fakultet: ' + this.data.naziv, 'U redu', {
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
}


