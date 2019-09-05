import { Component, OnInit } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
  headName;
  service;
  flag;
  question: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        this.flag = params.flag;
        if(this.flag == 1){
          this.question = true;
        } else {
          this.question = false;
        }
      });

    let item = JSON.parse(sessionStorage.getItem('form'));
    this.headName = item.name + ' ' + item.lname;
  }

  save() {
    let service = this.service;
    if (!service) {
      alert("กรุณาเลือกข้อมูล...");
      return false;
    }
    let data = {
      service: service
    }
    sessionStorage.setItem("page3",JSON.stringify(data));
    //console.log(data);
    this.router.navigateByUrl('/page4');
  }

  next(){
    let data = {
      service: ""
    }
    sessionStorage.setItem("page3",JSON.stringify(data));
    this.router.navigateByUrl('/page4');
  }

}
