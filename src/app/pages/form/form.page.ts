import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
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
  privilege;
  age;
  showTrue: boolean = false;
  constructor(
    private router: Router,
    private alert: AlertController,
    private http: Http,
    public loadingController: LoadingController,
    @Inject('API_URL') private API_URL: string,
  ) { }

  ngOnInit() {

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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'กำลังตรวจสอบข้อมูล...',
      //duration: 2000
    });
    await loading.present();

    //const { role, data } = await loading.onDidDismiss();

    //console.log('Loading dismissed!');
  }

  checkCid(){
    let cid = this.cid;
    if (!this.cid || !this.privilege) {
      //alert("กรอกข้อมูลไม่ครบ...");
      this.Alert("กรอกข้อมูลไม่ครบ...");
      return false;
    }

    if(cid.length != 13){
      this.Alert("เลขบัตรประชาชนต้อง 13 หลัก...");
      return false;
    }
    this.presentLoading();
    this.http.post(this.API_URL + "/person/",{cid: cid}).subscribe(res => {

      let data =  res.json();
      let person = data.rows[0][0];
      console.log(person);
      if(!person){
        this.loadingController.dismiss();
        this.showTrue = false;
        this.Alert("ไม่พบข้อมูลในระบบจังหวัด...");
        return false;
      } else {
        this.loadingController.dismiss();
        this.showTrue = true;
        this.name = person.NAME;
        this.lname = person.LNAME;
        if(person.SEX == 1){
          this.sex = "M";
        } else {
          this.sex = "F";
        }
      }
      this.age = person.AGE;
    })
  }

  save() {
    if (!this.cid || !this.privilege || !this.name || !this.lname || !this.age || !this.sex) {
      this.Alert("กรอกข้อมูลไม่ครบ...");
      return false;
    }
    
    let data = {
      cid: this.cid,
      sex: this.sex,
      name: this.name,
      lname: this.lname,
      age: this.age,
      privilege: this.privilege
    }
    //console.log(data);
    sessionStorage.setItem("form", JSON.stringify(data));
    this.router.navigateByUrl('/page1');
  }

}
