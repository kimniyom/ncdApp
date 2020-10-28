import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL_NCD') private API_URL_NCD: string,
  ) { }

  async getChangwat(){
    return this.http.get(this.API_URL_NCD + "/config/").toPromise();
  }
}
