import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-lastform',
  templateUrl: './lastform.page.html',
  styleUrls: ['./lastform.page.scss'],
})
export class LastformPage implements OnInit {
  headName;
  bmiValue;
  dmValue;
  strokeValue;
  paralysis;//อัมพฤกษ์
  bmi;
  dm;
  ht;
  bp_avg_start;
  bp_avg_end;
  constructor(
  	private router: Router,
    private http: Http,
    private statusBar: StatusBar
    ) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#3880ff');
  	let item = JSON.parse(sessionStorage.getItem('form'));
    this.headName = item.name + ' ' + item.lname;
    this.dmValue = this.getDmvalue();
    this.getDetail();
    this.strokeValue = this.getStroke();
    this.paralysis = this.getParalysis();
    this.ht = this.getHtvalue();
  }

  getDetail(){
    let lastform = JSON.parse(sessionStorage.getItem('lastform'));
    this.bmiValue = this.getValueBmi(lastform.bmi);
    this.bmi = lastform.bmi;
  }

  currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }


  getValueBmi(bmi){
    if(bmi < 18.5){
      return "ผอม";
    } else if(bmi >= 18.5 && bmi <= 22.9){
      return "ปกติ";
    } else if(bmi >= 23 && bmi <= 24.9){
      return "น้ำหนักตัวมากเกินไป";
    } else if(bmi >= 25 && bmi <= 29.9){
      return "อ้วนมาก(ระดับ 1)";
    } else if(bmi > 30){
      return "อ้วนมาก(ระดับ 2)";
    }
  }

  getDmvalue(){
    let lastform = JSON.parse(sessionStorage.getItem('lastform'));
    let fbs = lastform.fbs;
    let sugar = lastform.sugar;
    let value;
    if(fbs){
      value = fbs;
    } else {
      value = sugar;
    }
    this.dm = value;
    if(value < 100){
      return 'กลุ่มปกติ';
    } else if(value >= 100 && value <= 125){
      return 'กลุ่มเสี่ยงสูง';
    } else if(value >= 126){
      return 'กลุ่มสงสัยป่วยรายใหม่';
    }
  }

  getStroke(){
    let smokes = JSON.parse(sessionStorage.getItem('page4'));
    let drinks = JSON.parse(sessionStorage.getItem('page5'));
    let smoke = smokes.smoke;
    let drink = drinks.drink;

    if(drink == 2 && smoke == 2){//ไม่ดื่มและไม่สูบ
      return "ปกติ";
    } 

    if(drink == 3 && smoke == 3){ //เคยดื่มและเคยสูบ
      return "ปกติ";
    }

    if(drink == 1 && smoke == 1){ //ดื่มและสูบ
      return "กลุ่มเสี่ยงสูง";
    }

    if(drink == 1 && smoke != 1){ //ดื่มอย่างเดียว
      return "กลุ่มเสี่ยง";
    }

    if(drink != 1 && smoke == 1 ){ //สูบอยางเดียว
      return "กลุ่มเสี่ยง";
    } 
  }

  getParalysis(){
    let smokes = JSON.parse(sessionStorage.getItem('page4'));
    let drinks = JSON.parse(sessionStorage.getItem('page5'));
    let smoke = smokes.smoke;
    let drink = drinks.drink;

    if(drink == 2 && smoke == 2){//ไม่ดื่มและไม่สูบ
      return "ปกติ";
    } 

    if(drink == 3 && smoke == 3){ //เคยดื่มและเคยสูบ
      return "ปกติ";
    }

    if(drink == 1 && smoke == 1){ //ดื่มและสูบ
      return "กลุ่มเสี่ยงสูง";
    }

    if(drink == 1 && smoke != 1){ //ดื่มอย่างเดียว
      return "กลุ่มเสี่ยง";
    }

    if(drink != 1 && smoke == 1 ){ //สูบอยางเดียว
      return "กลุ่มเสี่ยง";
    } 

  }

  getHtvalue(){
    let lastform = JSON.parse(sessionStorage.getItem('lastform'));
    let bpstart = lastform.bp_avg_start;
    let bpend = lastform.bp_avg_end;
    this.bp_avg_start = bpstart;
    this.bp_avg_end = bpend;

    if(bpstart < 120 && bpend > 80){
      return 'กลุ่มปกติ(มีปัจจัยเสี่ยง)';
    } else if((bpstart >= 120 && bpstart <= 139) && (bpend >= 80 && bpend <= 89 )){
      return 'กลุ่มเสี่ยงสูง';
    } else if(bpstart >= 140 && bpend >= 90){
      return 'สงสัยรายใหม่';
    } else {
      return 'ประมวลผมไม่ได้';
    }
  }

}
