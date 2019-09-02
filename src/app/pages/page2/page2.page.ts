import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  public etc: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(){
    this.router.navigateByUrl('/page3');
  }

}
