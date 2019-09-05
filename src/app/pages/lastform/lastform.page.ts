import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-lastform',
  templateUrl: './lastform.page.html',
  styleUrls: ['./lastform.page.scss'],
})
export class LastformPage implements OnInit {
  headName;
  constructor(
  	private router: Router,
    private http: Http
    ) { }

  ngOnInit() {
  	let item = JSON.parse(sessionStorage.getItem('form'));
    this.headName = item.name + ' ' + item.lname;
  }

}
