import { Injectable } from '@angular/core';
import { Person } from 'src/app/class/person';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apirest:string

  constructor(private http:HttpClient) { 
    this.apirest="http://localhost:8080/person"
  }

  public findAll():Observable<Person[]>{
    return this.http.get<Person[]>(this.apirest)
  }

  public save(person:Person){
    return this.http.post<Person>(this.apirest, person)
  }

  public findById(id:string):Observable<Person>{
    return this.http.get(`${this.apirest}/${id}`)
  }

  public patchPerson(id:string, person:Person):Observable<Person>{
    return this.http.patch<Person>(`${this.apirest}/updatePerson/${id}`, person)
  }

  public deletePerson(id:any):Observable<Person>{
    return this.http.delete(this.apirest+"/"+id)
  }
}
