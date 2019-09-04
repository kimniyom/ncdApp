import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  cid;
  name;
  lname;
  sex;
  privilege;
  constructor(
    private router: Router,
    private alert: AlertController
  ) { }

  ngOnInit() {

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

  save() {
    if (!this.sex || !this.cid || !this.name || !this.lname || !this.privilege) {
      //alert("กรอกข้อมูลไม่ครบ...");
      this.Alert("กรอกข้อมูลไม่ครบ...");
      return false;
    }

    let data = {
      cid: this.cid,
      sex: this.sex,
      name: this.name,
      lname: this.lname,
      privilege: this.privilege
    }
    //console.log(data);
    sessionStorage.setItem("form", JSON.stringify(data));
    this.router.navigateByUrl('/page1');
  }

}
