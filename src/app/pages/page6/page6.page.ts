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
  exercise;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
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
