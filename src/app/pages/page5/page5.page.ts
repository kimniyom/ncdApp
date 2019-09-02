import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {
  drink;
  amountdrinkweek;
  showDrink: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  save() {
    let drink = this.drink;
    let amountdrinkweek;
    if (drink) {
      if (drink == 1) {
        if (!this.amountdrinkweek) {
          alert("กรอกข้อมูลไม่ครบ");
          return false;
        }
      } 
    } else {
      alert("ยังไม่ได้เลือกข้อมูล");
      return false;
    }
    let data = {
      drink: drink,
      amountdrinkweek: this.amountdrinkweek
    }

    console.log(data);
    this.router.navigateByUrl('/page6');
  }

  getDrink() {
    let drink = this.drink;
    if (drink == 1) {
      this.showDrink = true;
    } else {
      this.showDrink = false;
      this.amountdrinkweek = "";
    }
  }
}
