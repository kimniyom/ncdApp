import { Component, OnInit, Inject } from '@angular/core';
//import { ModalController, ViewController } from 'ionic-angular';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormuladmPage } from '../formuladm/formuladm.page';
import { FormularhtPage } from '../formularht/formularht.page';
import { FormulaobesityPage } from '../formulaobesity/formulaobesity.page';

import { from } from 'rxjs';
@Component({
  selector: 'app-lastform',
  templateUrl: './lastform.page.html',
  styleUrls: ['./lastform.page.scss'],
})
export class LastformPage implements OnInit {
  page;
  isLoading = false;
  isFbs = false;
  isSugar = false;
  fbsValue;
  sugarValue;
  fbsValueText;
  sugarValueText
  waistlineText;
  loading;
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
  recommend;
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
  waistline;
  age;
  token;
  smoke;
  motorcycle;
  capmotorcycle;
  drinkmotorcycle;
  accident;
  scoreDmValue;
  //
  htRecommend;
  constructor(
    private router: Router,
    private http: Http,
    private alert: AlertController,
    private loadingController: LoadingController,
    private statusBar: StatusBar,
    private modalController: ModalController,
    @Inject('API_URL_NCD') private API_URL_NCD: string,
  ) { }


  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.statusBar.backgroundColorByHexString('#3880ff');
    let item = JSON.parse(sessionStorage.getItem('form'));
    this.headName = item.name + ' ' + item.lname;
    this.age = item.age;
    this.cid = item.cid;
    this.name = item.name;
    this.lname = item.lname;
    this.sex = item.sex;
    this.age = item.age;
    this.privilege = item.privilege;

    let page1 = JSON.parse(sessionStorage.getItem('page1'));
    this.mom_dm = page1.mom_dm;//เบาหวาน
    this.mom_ht = page1.mom_ht;//ความดัน
    this.mom_gout = page1.mom_gout;//เก้๊าท์
    this.mom_crf = page1.mom_crf;//ไตวาย
    this.mom_mi = page1.mom_mi;//กล้ามเนื้อหัวใจตาย
    this.mom_stroke = page1.mom_stroke;//เส้นเลือกสมอง
    this.mom_copd = page1.mom_copd;//ถุงลมพอง
    this.mom_none = page1.mom_none;//ไม่ทราบ
    this.mom_etc = page1.mom_etc;//อื่น ๆ
    this.b_dm = page1.b_dm;//เบาหวาน
    this.b_ht = page1.b_ht;//ความดัน
    this.b_gout = page1.b_gout;//เก้๊าท์
    this.b_crf = page1.b_crf;//ไตวาย
    this.b_mi = page1.b_mi;//กล้ามเนื้อหัวใจตาย
    this.b_stroke = page1.b_stroke;//เส้นเลือกสมอง
    this.b_copd = page1.b_copd;//ถุงลมพอง
    this.b_none = page1.b_none;//ไม่ทราบ
    this.b_etc = page1.b_etc;//อื่น ๆ

    let page2 = JSON.parse(sessionStorage.getItem('page2'));
    this.me_dm = page2.me_dm;
    this.me_ht = page2.me_ht;
    this.me_cirrhosis = page2.me_cirrhosis;
    this.me_paralysis = page2.me_paralysis;
    this.me_heart = page2.me_heart;
    this.me_dyslipidemia = page2.me_dyslipidemia;
    this.me_foot = page2.me_foot;
    this.me_confined = page2.me_confined;
    this.me_water = page2.me_water;
    this.me_urine = page2.me_urine;
    this.me_eat = page2.me_eat;
    this.me_weight_loss = page2.me_weight_loss;
    this.me_lesion_mouth = page2.me_lesion_mouth;
    this.me_skin = page2.me_skin;
    this.me_eye = page2.me_eye;
    this.me_seared_foot_hand = page2.me_seared_foot_hand;

    let page3 = JSON.parse(sessionStorage.getItem('page3'));
    this.service = page3.service;

    let page4 = JSON.parse(sessionStorage.getItem('page4'));
    this.smokes = page4.smoke;
    this.amountday = page4.amountday;
    this.pack = page4.pack;
    this.typesmoke = page4.typesmoke;
    this.typesmokeold = page4.typesmokeold;
    this.amountyear = page4.amountyear;

    let page5 = JSON.parse(sessionStorage.getItem('page5'));
    this.drink = page5.drink;
    this.amountdrinkweek = page5.amountdrinkweek;

    let page6 = JSON.parse(sessionStorage.getItem('page6'));
    this.exercise = page6.exercise;

    let page7 = JSON.parse(sessionStorage.getItem('page7'));
    this.sweet = page7.sweet;
    this.salty = page7.salty;
    this.creamy = page7.creamy;
    this.nonselect = page7.nonselect;

    let page8 = JSON.parse(sessionStorage.getItem('page8'));
    this.motorcycle = page8.motorcycle;

    let page9 = JSON.parse(sessionStorage.getItem('page9'));
    this.capmotorcycle = page9.capmotorcycle

    let page10 = JSON.parse(sessionStorage.getItem('page10'));
    this.drinkmotorcycle = page10.drinkmotorcycle;

    let page11 = JSON.parse(sessionStorage.getItem('page11'));
    this.accident = page11.accident;

    this.getDmvalue();
    //this.dmValue = dmGroup.group;
    //this.recommend = dmGroup.recommend;
    this.getDetail();
    this.strokeValue = this.getStroke();
    this.paralysis = this.getParalysis();
    let htGroup = this.getHtvalue();
    this.ht = htGroup.group;
    this.htRecommend = htGroup.recommend;
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'กำลังบันทึกข้อมูล...',
      //duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async closeLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FormuladmPage
    });
    return await modal.present();
  }

  async popupHt() {
    const modal = await this.modalController.create({
      component: FormularhtPage
    });
    return await modal.present();
  }

  async popupObesity() {
    const modal = await this.modalController.create({
      component: FormulaobesityPage
    });
    return await modal.present();
  }

  getDetail() {
    let lastform = JSON.parse(sessionStorage.getItem('lastform'));
    this.bmiValue = this.getValueBmi(lastform.bmi);
    this.bmi = lastform.bmi;
    this.waistline = lastform.waistline;

    this.weight = lastform.weight;
    this.height = lastform.height;
    this.bp_s1_start = lastform.bp_s1_start;//BP ครั้งที่ 1
    this.bp_s1_end = lastform.bp_s1_end;//BP ครั้งที่ 1
    this.bp_s2_start = lastform.bp_s2_start;//BP ครั้งที่ 2
    this.bp_s2_end = lastform.bp_s2_end;//BP ครั้งที่ 2
    this.bp_avg_start = lastform.bp_avg_start;//BP เฉลี่ย
    this.bp_avg_end = lastform.bp_avg_end;//BP เฉลี่ย
    this.fbs = lastform.fbs;
    this.sugar = lastform.sugar;
    this.food = lastform.food;

    this.scoreDmValue = this.scoreDm();
    this.recommend = this.recommendDm();
    this.waistlineText = this.getWaistlineValue();
  }

  async Alert(text) {
    const alert = await this.alert.create({
      header: '!แจ้งเตือน',
      subHeader: text,
      //message: text,,
      buttons: ['OK']
    });

    await alert.present();
  }

  currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  getValueBmi(bmi) {
    if (bmi < 18.5) {
      return "ผอม";
    } else if (bmi >= 18.5 && bmi <= 22.9) {
      return "ปกติ";
    } else if (bmi >= 23 && bmi <= 24.9) {
      return "น้ำหนักตัวมากเกินไป";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "อ้วนมาก(ระดับ 1)";
    } else if (bmi > 30) {
      return "อ้วนมาก(ระดับ 2)";
    }
  }

  scoreDm() {
    let lastform = JSON.parse(sessionStorage.getItem('lastform'));
    let sex = this.sex;
    let age = this.age;
    let bmi = lastform.bmi;
    let waistline = this.waistline;
    let ht = this.me_ht;
    let momDm = this.mom_dm;//พ่อแม่เป็นเบาหวาน
    let bDm = this.b_dm;//พี่น้องเป็นเบาหวาน

    let sexScore;
    let ageScore;
    let bmiScore;
    let waistlineScore;
    let htScore;
    let familyScore;

    if (sex == "F") {
      sexScore = 0;
      if (waistline < 80) {
        waistlineScore = 0;
      } else if (waistline >= 80) {
        waistlineScore = 2;
      }
    } else {
      sexScore = 2;
      if (waistline < 90) {
        waistlineScore = 0;
      } else if (waistline >= 90) {
        waistlineScore = 2;
      }
    }

    if (age >= 35 && age <= 44) {
      ageScore = 0;
    } else if (age >= 45 && age <= 49) {
      ageScore = 1;
    } else if (age >= 50) {
      ageScore = 2;
    }

    if (bmi < 23) {
      bmiScore = 0;
    } else if (bmi >= 23 && bmi >= 27.5) {
      bmiScore = 3;
    } else if (bmi > 27.5) {
      bmiScore = 5;
    }

    if (ht == 1) {
      htScore = 2;
    } else {
      htScore = 0;
    }

    if (momDm == true || bDm == true) {
      familyScore = 4;
    } else {
      familyScore = 0;
    }

    let total = (sexScore + ageScore + bmiScore + waistlineScore + htScore + familyScore);
    //return "sexScore = " + sexScore + " ageScore = " + ageScore + " bmiScore = " + bmiScore + " รอบเอว = " + waistlineScore + " ความดัน = " + htScore + " คนในครอบครัวเบาหวาน = " + familyScore;
    return total;
  }

  getDmvalue() {
    let lastform = JSON.parse(sessionStorage.getItem('lastform'));
    let fbs = lastform.fbs;
    let sugar = lastform.sugar;
    let value;
    if (fbs) {
      this.isFbs = true;
      this.isSugar = false;
      this.fbsValue = fbs;
      if (fbs < 100) {
        this.fbsValueText = 'กลุ่มปกติ';
      } else if (fbs >= 100 && fbs <= 125) {
        this.fbsValueText = 'กลุ่มเสี่ยงสูง';
      } else if (fbs >= 126) {
        this.fbsValueText = 'กลุ่มสงสัยป่วย';
      }
    } else {
      this.isSugar = true;
      this.isFbs = false;
      this.sugarValue = sugar;
      if (sugar < 100) {
        this.sugarValueText = 'กลุ่มปกติ';
      } else if (sugar >= 140 && sugar <= 199) {
        this.sugarValueText = 'กลุ่มเสี่ยงสูง';
      } else if (sugar >= 200) {
        this.sugarValueText = 'กลุ่มสงสัยป่วย';
      }
    }

  }

  recommendDm() {
    let score = this.scoreDmValue;
    let recommend;
    if (score <= 2) {
      recommend = "ความเสี่ยงน้อยมาก โอกาศเป็นเบาหวานน้อยกว่า 1 ใน 20 ควรออกกำลังกายสม่ำเสมอ รักษาน้ำหนักตัว ตรวจความดันเลือด";
    } else if (score >= 3 && score <= 5) {
      recommend = "ความเสี่ยงน้อย โอกาศเป็นเบาหวาน 1 ใน 12 ควรออกกำลังกายสม่ำเสมอ รักษาน้ำหนักตัว ตรวจความดันเลือด";
    } else if (score >= 6 && score <= 8) {
      recommend = "ความเสี่ยงปานกลาง โอกาศเป็นเบาหวานประมาณ 1 ใน 7 ควรควบคุมอาหาร ควรออกกำลังกายสม่ำเสมอ รักษาน้ำหนักตัว ตรวจความดันเลือด";
    } else if (score >= 9 && score <= 10) {
      recommend = "ความเสี่ยงสูง โอกาศเป็นเบาหวานประมาณ 1 ใน 4 ควรควบคุมอาหารและออกกำลังกายสม่ำเสมอ รักษาน้ำหนักตัว ตรวจความดันเลือดและตรวจน้ำตาลในเลือด";
    } else if (score >= 11) {
      recommend = "ความเสี่ยงสูงมาก โอกาศเป็นเบาหวานประมาณ 1 ใน 3 ควรควบคุมอาหารและออกกำลังกายสม่ำเสมอ รักษาน้ำหนักตัว ตรวจความดันเลือดและตรวจน้ำตาลในเลือด";
    }

    return recommend;
  }


  getStroke() {
    let smokes = JSON.parse(sessionStorage.getItem('page4'));
    let drinks = JSON.parse(sessionStorage.getItem('page5'));
    let smoke = smokes.smoke;
    let drink = drinks.drink;

    if (drink == 2 && smoke == 2) {//ไม่ดื่มและไม่สูบ
      return "ปกติ";
    }

    if (drink == 3 && smoke == 3) {//เคยดื่มและเคยสูบ
      return "ปกติ";
    }

    if (drink == 1 && smoke == 1) {//ดื่มและสูบ
      return "กลุ่มเสี่ยงสูง";
    }

    if (drink == 1 && smoke != 1) {//ดื่มอย่างเดียว
      return "กลุ่มเสี่ยง";
    }

    if (drink != 1 && smoke == 1) {//สูบอยางเดียว
      return "กลุ่มเสี่ยง";
    }
  }

  getParalysis() {
    let smokes = JSON.parse(sessionStorage.getItem('page4'));
    let drinks = JSON.parse(sessionStorage.getItem('page5'));
    let smoke = smokes.smoke;
    let drink = drinks.drink;

    if (drink == 2 && smoke == 2) {//ไม่ดื่มและไม่สูบ
      return "ปกติ";
    }

    if (drink == 3 && smoke == 3) { //เคยดื่มและเคยสูบ
      return "ปกติ";
    }

    if (drink == 1 && smoke == 1) { //ดื่มและสูบ
      return "กลุ่มเสี่ยงสูง";
    }

    if (drink == 1 && smoke != 1) { //ดื่มอย่างเดียว
      return "กลุ่มเสี่ยง";
    }

    if (drink != 1 && smoke == 1) { //สูบอยางเดียว
      return "กลุ่มเสี่ยง";
    }

  }

  getWaistlineValue(){
    let sex = this.sex;
    let waistline = this.waistline;
    if(sex == "M"){
      if(waistline < 90){
        return "กลุ่มปกติ";
      } else {
        return "กลุ่มเสี่ยง";
      }
    } else {
      if(waistline < 80){
        return "กลุ่มปกติ";
      } else {
        return "กลุ่มเสี่ยง";
      }
    }
    
  }

  getHtvalue() {
    let lastform = JSON.parse(sessionStorage.getItem('lastform'));
    let bpstart = lastform.bp_avg_start;
    let bpend = lastform.bp_avg_end;
    this.bp_avg_start = bpstart;
    this.bp_avg_end = bpend;

    if (bpstart < 120 && bpend > 80) {
      return { group: 'กลุ่มปกติ(มีปัจจัยเสี่ยง)', recommend: 'ควรเช็คความดันโลหิตสม่ำเสมอ' };
    } else if ((bpstart >= 120 && bpstart <= 139) && (bpend >= 80 && bpend <= 89)) {
      return { group: 'สงสัยรายใหม่', recommend: 'ปรึกษาแพทย์' };
    } else if ((bpstart >= 140 && bpstart <= 159) && (bpend >= 90 && bpend <= 99)) {
      return { group: 'กลุ่มเสี่ยงสูง', recommend: 'พบแพทย์' };
    } else if (bpstart >= 160 && bpend >= 100) {
      return { group: 'กลุ่มเสี่ยงสูงมาก', recommend: 'พบแพทย์ด่วน' };
    } else if (bpstart <= 120 && bpend <= 80) {
      return { group: 'กลุ่มปกติ', recommend: 'ควรเช็คความดันโลหิตสม่ำเสมอ' };
    } else {
      return { group: 'ไม่อยู่ในช่วงเงื่อนไข', recommend: '-' };
    }
  }

  async save() {
    let year = sessionStorage.getItem('budgetYear');
    let data = {
      cid: this.cid,
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
      waistline: this.waistline,
      motorcycle: this.motorcycle,
      capmotorcycle: this.capmotorcycle,
      drinkmotorcycle: this.drinkmotorcycle,
      accident: this.accident,
      age: this.age,
      year: year,
      token: this.token
    }

    await this.http.post(this.API_URL_NCD + "/ncd/log", data).subscribe(res => {
      let data = res.json();
      let status = data.ok;
      console.log(status);
    });

    //ลบข้อมูลเดิมก่อนบันทึกข้อมูลใหม่
    await this.http.delete(this.API_URL_NCD + "/ncd/" + this.cid + "/" + year).subscribe(res => {
      let result = res.json();
      let delstatus = result.ok;
      if (delstatus == true) {
        this.http.post(this.API_URL_NCD + "/ncd", data).subscribe(res => {
          this.presentLoading();
          let data = res.json();
          let status = data.ok;
          console.log(status);
          if (status == true) {
            this.closeLoading();
            this.router.navigateByUrl('/success');
          } else {
            this.Alert("บันทึกข้อมูลไม่สำเร็จกรุณาตรวจสอบ...!");
            return false;
          }
        })
      }
    })
    //console.log(data);
  }

}
