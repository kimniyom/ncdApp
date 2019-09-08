import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    private http: Http,
    private statusBar: StatusBar
  ) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#fffee6');
  }

}
