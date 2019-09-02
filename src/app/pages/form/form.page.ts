import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  rootPage;
  cid;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  save(){
    this.router.navigateByUrl('/page1');
  }

  

}
