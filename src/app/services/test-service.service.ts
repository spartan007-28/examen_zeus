import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './../models/data.model';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  // private URL = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com';
  private URL = environment.API.url;

  constructor( private http: HttpClient ) { }

  // METHOD GET

  getEmployees() {
    return this.http.get(`${ this.URL }/v1/examen/employees/carlos_castañeda`);
  }

  getGroups() {
    return this.http.get(`${ this.URL }/v1/examen/groups/carlos_castañeda`);
  }

  getGroupsById( id: number) {
    return this.http.get(`${ this.URL}/v1/examen/employees/carlos_castañeda/getByGroup?id=${ id }`);
  }

  // METHOD POST

  addEmployee( employee: Employee ) {
    return this.http.post(`${ this.URL }/v1/examen/employees/carlos_castañeda`, employee);
  }

}
