import { Injectable,Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private API_URL: string,
    @Inject('API_URL_NCD') private API_URL_NCD: string,
  ) { }

  async getPerson(CID: any){
    return this.http.get(this.API_URL + "/person/" + CID).toPromise();
  }

}
