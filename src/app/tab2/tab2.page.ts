import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listData: any;
  constructor(
    public http: Http
  ){
    this.http.get('http://localhost:5555/user').subscribe(res => {
      var jsonobject = JSON.parse(res['_body'])
      this.listData = jsonobject.rows
      //console.log(res);
    })
  }
}
