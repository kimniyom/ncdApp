import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page6',
  templateUrl: './page6.page.html',
  styleUrls: ['./page6.page.scss'],
})
export class Page6Page implements OnInit {
  headName;
  exercise;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    let item = JSON.parse(sessionStorage.getItem('form'));
    this.headName = item.name + ' ' + item.lname;
  }

  save() {
    let exercise = this.exercise;
    if(!exercise){
      alert("กรุณาเลือกข้อมูล...");
      return false;
    }
    let data = {exercise: exercise}
    sessionStorage.setItem("page6",JSON.stringify(data));
    this.router.navigateByUrl('/page7');
  }

}
