import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.page.html',
  styleUrls: ['./page9.page.scss'],
})
export class Page9Page implements OnInit {
  headName;
  capmotorcycle;
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
    if(!this.capmotorcycle){
      this.Alert("เลือกข้อมูลไม่ครบ...!");
      return false;
    }

    let data = {
      capmotorcycle: this.capmotorcycle
    }

    sessionStorage.setItem("page9",JSON.stringify(data));
    this.router.navigateByUrl('/page10');
  }

}
