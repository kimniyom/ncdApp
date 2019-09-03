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
    //console.log(data);
    this.router.navigateByUrl('/page4');
  }

  next(){
    this.router.navigateByUrl('/page4');
  }

}
