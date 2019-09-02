import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  smokes;
  amountday;
  pack;
  typesmoke;
  typesmokeold;
  amountyear;
  public showSmoke: boolean;
  public showCancel: boolean;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.showSmoke = false;
    this.showCancel = false;
    this.smokes = "";
  }

  save() {
    let smoke = this.smokes;
    if (smoke) {
      if (smoke == 1) {
        if (!this.amountday || !this.pack || !this.typesmoke) {
          alert("กรอกข้อมูลไม่ครบ");
          return false;
        }
      } else if (smoke == 3) {
        if (this.typesmokeold == "" || this.amountyear == "") {
          alert("กรอกข้อมูลไม่ครบ");
          return false;
        }
      }
    } else {
      alert("ยังไม่ได้เลือกข้อมูล");
      return false;
    }
    let data = {
      smoke: smoke,
      amountday: this.amountday,
      pack: this.pack,
      typesmoke: this.typesmoke,
      typesmokeold: this.typesmokeold,
      amountyear: this.amountyear
    }
    console.log(data);
    this.router.navigateByUrl('/page5');
  }

  getSmoke() {
    let smoke = this.smokes;
    if (smoke == 1) {
      this.typesmokeold = "";
      this.amountyear = "";
      this.showSmoke = true;
      this.showCancel = false;
    } else if (smoke == 3) {
      this.amountday = "";
      this.pack = "";
      this.typesmoke = "";
      this.showSmoke = false;
      this.showCancel = true;
    } else {
      this.typesmokeold = "";
      this.amountyear = "";
      this.amountday = "";
      this.pack = "";
      this.typesmoke = "";
      this.showSmoke = false;
      this.showCancel = false;
    }

  }

}
