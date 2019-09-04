import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  me_dm;
  me_ht;
  me_cirrhosis;//โรคตับ
  me_paralysis;//อัมพาต
  me_heart;//โรคหัวใจ
  me_dyslipidemia;//ไขมันในเลือด
  me_foot;//แผลที่เท้า
  me_confined;//คลอดบุตร
  me_water;//ดื่มน้ำบ่อย
  me_urine;//ปัสสาวะบ่อย
  me_eat;//กินจุ
  me_weight_loss;//น้ำหนักลด
  me_lesion_mouth;//แผลริมฝีปาก
  me_skin;//คันตามผิดหนัง
  me_eye;//ตาพล่ามัว
  me_seared_foot_hand;//ชาปลายมือ ปลายเท้า

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(){
    if(!this.me_dm || !this.me_ht || !this.me_cirrhosis || !this.me_paralysis || !this.me_heart || !this.me_dyslipidemia || !this.me_foot || !this.me_confined || !this.me_water || !this.me_urine || !this.me_eat || !this.me_weight_loss || !this.me_lesion_mouth || !this.me_skin || !this.me_eye || !this.me_seared_foot_hand){
      alert("เลือกข้อมูลไม่ครบ...!");
      return false;
    }
    let data = {
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
      me_seared_foot_hand: this.me_seared_foot_hand
    }
    sessionStorage.setItem("page2",JSON.stringify(data));
    let check = this.checkDiag();
    
    this.router.navigate(['/page3'],{queryParams: {flag: check}});
  }

  checkDiag(){
    if(this.me_dm == 1 || this.me_ht == 1 || this.me_cirrhosis == 1 || this.me_paralysis == 1 || this.me_heart == 1 || this.me_dyslipidemia == 1 || this.me_foot == 1 || this.me_confined == 1 || this.me_water == 1 || this.me_urine == 1 || this.me_eat == 1 || this.me_weight_loss == 1 || this.me_lesion_mouth == 1 || this.me_skin == 1 || this.me_eye == 1 || this.me_seared_foot_hand == 1){
      return 1;
    } else {
      return 0;
    }
  }

}
