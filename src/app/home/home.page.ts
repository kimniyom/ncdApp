import { Component, Inject,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private router: Router,
    private http: Http,
    private statusBar: StatusBar,
    @Inject('API_URL') private API_URL: string,
  ) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#fffee6');
    this.checkToken();
  }

  checkToken(){
    let token = localStorage.getItem('token');
    if(!token){
      this.http.get(this.API_URL + "/login/gentoken").subscribe(res => {
        //localStorage.setItem('token',res[0]);
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);
        localStorage.setItem('token',resJSON._body);
      })
    } else {
      console.log(localStorage.getItem('token'));
    }
    
  }

}
