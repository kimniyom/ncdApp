import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Platform, NavController } from 'ionic-angular';
import { ModalController, AlertController } from '@ionic/angular';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
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
    private alert: AlertController,
    private statusBar: StatusBar,
    private modalController: ModalController,
    @Inject('API_URL_NCD') private API_URL_NCD: string,
  ) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#fffee6');
    this.checkToken();

    let now = new Date();
    let yearNow: number = (now.getFullYear() + (now.getMonth() + 1));
    let budGetyear;
    let yearBudget: number = (now.getFullYear() + 9);
    if(yearNow > yearBudget){
      budGetyear = ((now.getFullYear() + 1) + 543);
    } else {
      budGetyear = (now.getFullYear() + 543);
    }

    sessionStorage.setItem('budgetYear',budGetyear);

  }

  async Alert(text) {
    const alert = await this.alert.create({
      header: '!แจ้งเตือน',
      subHeader: text,
      //message: text,,
      buttons: ['OK']
    });

    await alert.present();
  }

  checkToken() {
    let token = localStorage.getItem('token');
    if (!token) {
      this.http.get(this.API_URL_NCD + "/login/gentoken").subscribe(res => {
        //localStorage.setItem('token',res[0]);
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);
        localStorage.setItem('token', resJSON._body);
      })
    } else {
      console.log(localStorage.getItem('token'));
    }

  }

}
