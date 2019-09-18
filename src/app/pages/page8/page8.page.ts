import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.page.html',
  styleUrls: ['./page8.page.scss'],
})
export class Page8Page implements OnInit {
  headName;
  motorcycle;
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
    if(!this.motorcycle){
      this.Alert("เลือกข้อมูลไม่ครบ...!");
      return false;
    }

    let data = {
      motorcycle: this.motorcycle
    }

    sessionStorage.setItem("page8",JSON.stringify(data));
    this.router.navigateByUrl('/page9');
  }

}
