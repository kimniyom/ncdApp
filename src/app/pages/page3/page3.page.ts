import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
  service;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(){
    let service = this.service;
    if(!service){
      alert("กรุณาเลือกข้อมูล...");
      return false;
    }
    let data = {
      service: service
    }
    //console.log(data);
    this.router.navigateByUrl('/page4');
  }

}
