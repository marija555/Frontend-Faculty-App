import { Status } from './../models/status';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
;

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private  readonly API_URL = 'http://localhost:8083/status/';

  dataChange: BehaviorSubject<Status[]> = new BehaviorSubject<Status[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllStatus(): Observable<Status[]> {
    this.httpClient.get<Status[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);

    });
    return this.dataChange.asObservable();
  }

  public addStatus(status: Status):void {
      status.id = 0;
     this.httpClient.post(this.API_URL,status).subscribe();
     console.log('Dodat status: ' + status.naziv);
  }

  public updateStatus(status: Status): void {
    this.httpClient.put(this.API_URL,status).subscribe();
  }

  public deleteStatus(id: number): void {
    console.log(this.API_URL + id);
    this.httpClient.delete(this.API_URL + id).subscribe();
  }

}
