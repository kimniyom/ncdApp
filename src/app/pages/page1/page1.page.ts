import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  public etc: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(){
    this.router.navigateByUrl('/page2');
  }

}
