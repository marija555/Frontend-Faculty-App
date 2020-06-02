import { Status } from './../../../models/status';
import { StatusService } from './../../../services/status.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.css']
})
export class StatusDialogComponent implements OnInit {

  public flag: number;

  constructor(public statusService: StatusService,
              public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StatusDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Status) { }


  ngOnInit(): void {
  }
  //za potvrdi na buttonu
  public add(): void {
    this.data.id = -1;
    this.statusService.addStatus(this.data);
    this.snackBar.open('Uspešno dodat status: '+ this.data.naziv,'U redu', {
     duration: 2500

  });
  }

  public  update(): void {
     this.statusService.updateStatus(this.data);
     this.snackBar.open('Uspešno modifikovan status: ' + this.data.naziv, 'U redu', {
      duration: 2500
    });
  }

  public delete() :void{
    this.statusService.deleteStatus(this.data.id);
    this.snackBar.open('Uspešno obrisan status: ' + this.data.naziv, 'U redu', {
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
