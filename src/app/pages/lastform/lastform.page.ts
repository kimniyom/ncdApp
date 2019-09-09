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
  //Fields Databases
  cid; 
  name;  
  lname;  
  sex;  
  privilege;  
  mom_dm;  
  mom_ht;  
  mom_gout;  
  mom_crf;  
  mom_mi; 
  mom_stroke;  
  mom_copd;  
  mom_none;  
  mom_etc;  
  b_dm;  
  b_ht;  
  b_gout;  
  b_crf;  
  b_mi;  
  b_stroke;  
  b_copd; 
  b_none; 
  b_etc; 
  me_dm; 
  me_ht; 
  me_cirrhosis; 
  me_paralysis; 
  me_heart; 
  me_dyslipidemia; 
  me_foot; 
  me_confined; 
  me_water; 
  me_urine; 
  me_eat; 
  me_weight_loss; 
  me_lesion_mouth; 
  me_skin; 
  me_eye; 
  me_seared_foot_hand; 
  service; 
  smokes; 
  amountday; 
  pack; 
  typesmoke; 
  typesmokeold; 
  amountyear; 
  drink; 
  amountdrinkweek; 
  exercise; 
  sweet; 
  salty; 
  creamy; 
  nonselect; 
  height; 
  weight; 
  bp_s1_start; 
  bp_s1_end; 
  bp_s2_start; 
  bp_s2_end;  
  fbs; 
  sugar; 
  food; 
  token; 
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

  save(){
    let data = {
    cid:this.cid,
    name: this.name, 
    lname: this.lname, 
    sex: this.sex, 
    privilege: this.privilege, 
    mom_dm: this.mom_dm, 
    mom_ht: this.mom_ht, 
    mom_gout: this.mom_gout, 
    mom_crf: this.mom_crf, 
    mom_mi: this.mom_mi,
    mom_stroke: this.mom_stroke, 
    mom_copd: this.mom_copd, 
    mom_none: this.mom_none, 
    mom_etc: this.mom_etc, 
    b_dm: this.b_dm, 
    b_ht: this.b_ht, 
    b_gout: this.b_gout, 
    b_crf: this.b_crf, 
    b_mi: this.b_mi, 
    b_stroke: this.b_stroke, 
    b_copd: this.b_copd,
    b_none: this.b_none,
    b_etc: this.b_etc,
    me_dm: this.me_dm,
    me_ht: this.me_ht,
    me_cirrhosis: this.me_cirrhosis,
    me_paralysis: this.me_paralysis,
    me_heart: this.me_heart,
    me_dyslipidemia: this.me_dyslipidemia,
    me_foot: this.me_foot,
    me_confined: this.me_confined,
    me_water: this.me_water,
    me_urine: this.me_urine,
    me_eat: this.me_eat,
    me_weight_loss: this.me_weight_loss,
    me_lesion_mouth: this.me_lesion_mouth,
    me_skin: this.me_skin,
    me_eye: this.me_eye,
    me_seared_foot_hand: this.me_seared_foot_hand,
    service: this.service,
    smokes: this.smokes,
    amountday: this.amountday,
    pack: this.pack,
    typesmoke: this.typesmoke,
    typesmokeold: this.typesmokeold,
    amountyear: this.amountyear,
    drink: this.drink,
    amountdrinkweek: this.amountdrinkweek,
    exercise: this.exercise,
    sweet: this.sweet,
    salty: this.salty,
    creamy: this.creamy,
    nonselect: this.nonselect,
    height: this.height,
    weight: this.weight,
    bmi: this.bmi,
    bp_s1_start: this.bp_s1_start,
    bp_s1_end: this.bp_s1_end,
    bp_s2_start: this.bp_s2_start,
    bp_s2_end: this.bp_s2_end,
    bp_avg_start: this.bp_avg_start,
    bp_avg_end: this.bp_avg_end,
    fbs: this.fbs,
    sugar: this.sugar,
    food: this.food,
    token: this.token
    }
  }

}
