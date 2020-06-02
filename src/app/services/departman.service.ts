import { Departman } from 'src/app/models/departman';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmanService {

  private readonly API_URL = 'http://localhost:8083/departman/';
  dataChange: BehaviorSubject<Departman[]> = new BehaviorSubject<Departman[]>([]);



  constructor(private httpClient: HttpClient) { }

  public getAllDepartman(): Observable<Departman[]> {
    this.httpClient.get<Departman[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
    return this.dataChange.asObservable();
}
public addDepartman(departman: Departman): void {
    departman.id = 0;
    this.httpClient.post(this.API_URL, departman).subscribe();
    console.log('Dodat departman: ' + departman.naziv);
}
public updateDepartman(departman: Departman): void {
    this.httpClient.put(this.API_URL, departman).subscribe();
}
public deleteDepartman(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
}


}
