import { Component, Inject,OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Platform, NavController } from 'ionic-angular';
import { ModalController } from '@ionic/angular';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormuladmPage } from '../pages/formuladm/formuladm.page';
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
    private modalController: ModalController,
    @Inject('API_URL_NCD') private API_URL_NCD: string,
  ) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#fffee6');
    this.checkToken();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FormuladmPage
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  checkToken(){
    let token = localStorage.getItem('token');
    if(!token){
      this.http.get(this.API_URL_NCD + "/login/gentoken").subscribe(res => {
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
