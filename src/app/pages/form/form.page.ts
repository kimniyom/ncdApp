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
  cid;
  name;
  lname;
  sex;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  save(){
    if(!this.sex || !this.cid || !this.name || !this.lname){
      alert("กรอกข้อมูลไม่ครบ...");
      return false;
    }

    let data = {
      cid: this.cid,
      sex: this.sex,
      name: this.name,
      lname: this.lname
    }
    console.log(data);
    //this.router.navigateByUrl('/page1');
  }

  

}
