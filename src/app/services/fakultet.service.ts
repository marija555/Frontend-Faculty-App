import { Fakultet } from './../models/fakultet';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class FakultetService {

      private readonly API_URL = 'http://localhost:8083/fakultet/';

      dataChange: BehaviorSubject<Fakultet[]> = new BehaviorSubject<Fakultet[]>([]);


    constructor(private httpClient: HttpClient) {

  }

  public getAllFakultet(): Observable<Fakultet[]> {
      this.httpClient.get<Fakultet[]>(this.API_URL).subscribe( data => {
        this.dataChange.next(data);
      },
        (error: HttpErrorResponse) => {
          console.log(error.name + ' ' + error.message);

      });
      return this.dataChange.asObservable();

    }

  public updateFakultet(fakultet: Fakultet): void {
    this.httpClient.put(this.API_URL, fakultet).subscribe();
  }

  public deleteFakultet(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
}


}
