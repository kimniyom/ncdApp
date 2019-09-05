import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-group2',
  templateUrl: './group2.page.html',
  styleUrls: ['./group2.page.scss'],
})
export class Group2Page implements OnInit {
	headName;
	weight;
	height;
	bmi;
	bp_s1_start;//BP ครั้งที่ 1
	bp_s1_end;//BP ครั้งที่ 1
	bp_s2_start;//BP ครั้งที่ 2
	bp_s2_end;//BP ครั้งที่ 2
	bp_avg_start;//BP เฉลี่ย
	bp_avg_end;//BP เฉลี่ย
	fbs;
	sugar;
	food;
	showfbs: boolean = true;
	showsugar: boolean = true;
  constructor(
  	private router: Router,
    private alert: AlertController) { }

  ngOnInit() {
  	let item = JSON.parse(sessionStorage.getItem('form'));
    this.headName = item.name + ' ' + item.lname;
  }

  async Alert(text) {
    const alert = await this.alert.create({
      header: '!แจ้งเตือน',
      subHeader: text,
      //message: text,
      buttons: ['OK']
    });

    await alert.present();
  }

  save(){
  	if(!this.weight || !this.height || !this.bmi || !this.bp_s1_start || !this.bp_s1_end || !this.bp_s2_start || !this.bp_s2_end || !this.bp_avg_start || !this.bp_avg_end){
      this.Alert("กรอกข้อมูลไม่ครบ...");
      return false;
    }

    if(!this.fbs && !this.sugar){
    	this.Alert("ยังไม่ได้กรอกการตรวจน้ำตาลในเลือด...");
    	return false;
    }

    let data = {
    	weight: this.weight,
		height: this.height,
		bmi: this.bmi,
		bp_s1_start: this.bp_s1_start,//BP ครั้งที่ 1
		bp_s1_end: this.bp_s1_end,//BP ครั้งที่ 1
		bp_s2_start: this.bp_s2_start,//BP ครั้งที่ 2
		bp_s2_end: this.bp_s2_end,//BP ครั้งที่ 2
		bp_avg_start: this.bp_avg_start,//BP เฉลี่ย
		bp_avg_end: this.bp_avg_end,//BP เฉลี่ย
		fbs: this.fbs,
		sugar: this.sugar,
		food: this.food
    }
    sessionStorage.setItem("lastform",JSON.stringify(data));
    this.router.navigateByUrl('/lastform');
  }

  changSugar(){
  	if(this.fbs){
  		this.showsugar = false;
  		this.showfbs = true;
  		this.food = "";
  		this.sugar = "";
  	} else {
  		this.fbs = "";
  		this.sugar = "";
  		this.showsugar = true;
  		this.showfbs = true;
  		this.food = "";
  	}
  }

changSugarPost(){
  	if(this.sugar){
  		this.showsugar = true;
  		this.showfbs = false;
  		this.food = "";
  		this.fbs = "";
  	} else {
  		this.fbs = "";
  		this.sugar = "";
  		this.showsugar = true;
  		this.showfbs = true;
  		this.food = "";
  	}
  }

  calculatorBmi(){
  	let w = this.weight;
  	let h = this.height;
  	let m = (h / 100);
  	let m_bmi = (m * 2);
  	let bmi = (w / m_bmi);
  	alert(h + "CM = " + m + "M");
  	this.bmi = bmi;
  }

}
