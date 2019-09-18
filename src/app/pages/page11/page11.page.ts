import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-page11',
  templateUrl: './page11.page.html',
  styleUrls: ['./page11.page.scss'],
})
export class Page11Page implements OnInit {
  headName;
  accident;
  constructor(
    private router: Router,
    private alert: AlertController
  ) { }

  ngOnInit() {
    let item = JSON.parse(sessionStorage.getItem('form'));
    this.headName = item.name + ' ' + item.lname;
  }

  async Alert(text) {
    const alert = await this.alert.create({
      header: '!แจ้งเตือน',
      subHeader: text,
      //message: text,
      buttons: ['OK']
    });

    await alert.present();
  }

  save(){
    if(!this.accident){
      this.Alert("เลือกข้อมูลไม่ครบ...!");
      return false;
    }

    let data = {
      accident: this.accident
    }

    sessionStorage.setItem("page11",JSON.stringify(data));
    this.router.navigateByUrl('/group2');
  }

}
