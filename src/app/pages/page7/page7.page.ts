import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page7',
  templateUrl: './page7.page.html',
  styleUrls: ['./page7.page.scss'],
})
export class Page7Page implements OnInit {
  headName;
  sweet;
  salty;
  creamy;
  nonselect;
  constructor(
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {
    this.sweet = 0;
    this.salty = 0;
    this.creamy = 0;
    this.nonselect = 0;
    let item = JSON.parse(sessionStorage.getItem('form'));
    this.headName = item.name + ' ' + item.lname;
  }

  save() {
    if(this.sweet == 0 && this.salty == 0 && this.creamy == 0 && this.nonselect == 0){
      alert("กรุณาเลือกข้อมูล...");
      return false;
    }
    let sweet: any;
    let salty: any;
    let creamy: any;
    let nonselect: any;

    if(this.sweet == true){
      sweet = 1;
    } else {
      sweet = 0;
    }

    if(this.salty == true){
      salty = 1;
    } else {
      salty = 0;
    }

    if(this.creamy == true){
      creamy = 1;
    } else {
      creamy = 0;
    }

    if(this.nonselect == true){
      nonselect = 1;
    } else {
      nonselect = 0;
    }

    let data = {
      sweet: sweet,
      salty: salty,
      creamy: creamy,
      nonselect: nonselect
    }
    sessionStorage.setItem("page7",JSON.stringify(data));
    this.router.navigateByUrl('/page8');
  }

  getFood(){
    this.nonselect = 0;
  }

  getFoodNon(){
    this.sweet = 0;
    this.salty = 0;
    this.creamy = 0;
    this.nonselect = 1;
  }
}
