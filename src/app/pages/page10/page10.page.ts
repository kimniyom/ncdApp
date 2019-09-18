import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-page10',
  templateUrl: './page10.page.html',
  styleUrls: ['./page10.page.scss'],
})
export class Page10Page implements OnInit {
  headName;
  drinkmotorcycle;
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
    if(!this.drinkmotorcycle){
      this.Alert("เลือกข้อมูลไม่ครบ...!");
      return false;
    }

    let data = {
      drinkmotorcycle: this.drinkmotorcycle
    }

    sessionStorage.setItem("page10",JSON.stringify(data));
    this.router.navigateByUrl('/page11');
  }


}
