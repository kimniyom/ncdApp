import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  mom_dm = false;//เบาหวาน
  mom_ht = false;//ความดัน
  mom_gout = false;//เก้๊าท์
  mom_crf = false;//ไตวาย
  mom_mi = false;//กล้ามเนื้อหัวใจตาย
  mom_stroke = false;//เส้นเลือกสมอง
  mom_copd = false;//ถุงลมพอง
  mom_none = false;//ไม่ทราบ
  mom_etc = "";//อื่น ๆ

  b_dm = false;//เบาหวาน
  b_ht = false;//ความดัน
  b_gout = false;//เก้๊าท์
  b_crf = false;//ไตวาย
  b_mi = false;//กล้ามเนื้อหัวใจตาย
  b_stroke = false;//เส้นเลือกสมอง
  b_copd = false;//ถุงลมพอง
  b_none = false;//ไม่ทราบ
  b_etc = "";//อื่น ๆ

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  save() {
    let mom = this.checkMom();
    let brethren = this.checkBrethren();
    if (mom == false) {
      alert("ไม่ได้เลือกข้อมูลในส่วนแม่หรือพ่อ...!");
      return false;
    }
    if (brethren == false) {
      alert("ไม่ได้เลือกข้อมูลในส่วนพี่น้อง...!");
      return false;
    }
    let data = {
      mom_dm: this.mom_dm,//เบาหวาน
      mom_ht: this.mom_ht,//ความดัน
      mom_gout: this.mom_gout,//เก้๊าท์
      mom_crf: this.mom_crf,//ไตวาย
      mom_mi: this.mom_mi,//กล้ามเนื้อหัวใจตาย
      mom_stroke: this.mom_stroke,//เส้นเลือกสมอง
      mom_copd: this.mom_copd,//ถุงลมพอง
      mom_none: this.mom_none,//ไม่ทราบ
      mom_etc: this.mom_etc,//อื่น ๆ
      b_dm: this.b_dm,//เบาหวาน
      b_ht: this.b_ht,//ความดัน
      b_gout: this.b_gout,//เก้๊าท์
      b_crf: this.b_crf,//ไตวาย
      b_mi: this.b_mi,//กล้ามเนื้อหัวใจตาย
      b_stroke: this.b_stroke,//เส้นเลือกสมอง
      b_copd: this.b_copd,//ถุงลมพอง
      b_none: this.b_none,//ไม่ทราบ
      b_etc: this.b_etc//อื่น ๆ
    }
    sessionStorage.setItem("page1",JSON.stringify(data));
    this.router.navigateByUrl('/page2');
  }

  checkMom() {
    if (!this.mom_dm && !this.mom_ht && !this.mom_gout && !this.mom_crf && !this.mom_mi && !this.mom_stroke && !this.mom_copd && !this.mom_none && !this.mom_etc) {
      return false;
    } else {
      return true;
    }
  }

  checkBrethren() {
    if (!this.b_dm && !this.b_ht && !this.b_gout && !this.b_crf && !this.b_mi && !this.b_stroke && !this.b_copd && !this.b_none && !this.b_etc) {
      return false;
    } else {
      return true;
    }
  }

}
