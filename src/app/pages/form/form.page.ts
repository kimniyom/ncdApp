import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,App } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Page1Page } from '../page1/page1.page';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  rootPage;
  cid;
  groupone:[];
  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.cid = "1539699927345";
  }

  save(){
    this.navCtrl.setRoot(Page1Page);
    //this.rootPage(Page1Page);
  }

  

}
