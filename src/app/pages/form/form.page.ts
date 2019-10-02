import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  isLoading = false;
  cid;
  name;
  lname;
  sex;
  privilege;
  age;
  hospcode;
  showTrue: boolean = false;
  
  constructor(
    private router: Router,
    private alert: AlertController,
    private http: Http,
    public loadingController: LoadingController,
    private statusBar: StatusBar,
    @Inject('API_URL') private API_URL: string,
  ) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#1d80bb');
   
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

  /*
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'กำลังตรวจสอบข้อมูล...',
      //duration: 2000
    });
    await loading.present();

    //const { role, data } = await loading.onDidDismiss();

    //console.log('Loading dismissed!');
  }
 */

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'กำลังตรวจสอบข้อมูล...',
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
        this.closeLoading();
        this.showTrue = false;
        this.Alert("ไม่พบข้อมูลในระบบจังหวัด...");
        return false;
      } else {
        this.closeLoading();
        this.showTrue = true;
        this.name = person.NAME;
        this.lname = person.LNAME;
        if(person.SEX == 1){
          this.sex = "M";
        } else {
          this.sex = "F";
        }

        if(person.AGE < 35){
          this.closeLoading();
          this.showTrue = false;
          this.Alert("อายุไม่ได้อยู่ในช่วงการคัดกรอง...");
          return false;
        }
      }
      this.age = person.AGE;
      this.hospcode = person.HOSPCODE;
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
      privilege: this.privilege,
      hospcode: this.hospcode
    }
    //console.log(data);
    sessionStorage.setItem("form", JSON.stringify(data));
    this.router.navigateByUrl('/page1');
  }

}
