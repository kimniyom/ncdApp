import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,LoadingController, ToastController } from '@ionic/angular';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { IonicSelectableComponent } from 'ionic-selectable';
import { UserService } from '../../api/user.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  school = null;
  isLoading = false;
  cid: string = "";
  name: string = "";
  lname: string = "";
  sex: string = "";
  privilege;
  age = "";
  hospcode = "";
  type: any = "";
  showperson: boolean;
  showsearch: boolean;
  showType: boolean = true;
  schoolList = [];
  
  constructor(
    private router: Router,
    private alert: AlertController,
    private http: Http,
    public loadingController: LoadingController,
    private statusBar: StatusBar,
    private toastCtrl: ToastController,
    private service: UserService,
    @Inject('API_URL') private API_URL: string,
    @Inject('API_URL_NCD') private API_URL_NCD: string,
  ) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#1d80bb');
    this.type = "1";
    this.cid = "";
    this.name = "";
    this.lname = "";
    this.sex = "";
    this.hospcode = "";
    this.age = "";
    this.showsearch = true;
    this.showperson = false;
    this.getSchool();
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }){
    console.log('port:',event.value)
  };
  
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
      message: 'กำลังตรวจสอบข้อมูล...หากรอนานเกินไปให้ปิดแล้วเปิด Application ใหม่อีกครั้ง',
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

  async checkCid(){
    let cid = this.cid;
    if (!this.cid) {
      //alert("กรอกข้อมูลไม่ครบ...");
      this.Alert("กรอกข้อมูลไม่ครบ...");
      return false;
    }

    if(this.type == 1){
      if(!this.privilege){
        this.Alert("กรุณาเลือกสิทธิ์...");
      return false;
      }
    } else if(this.type == 2){
      if(!this.school){
        this.Alert("กรุณาเลือกโรงเรียน...");
      return false;
      }
    }

    if(cid.length != 13){
      this.Alert("เลขบัตรประชาชนต้อง 13 หลัก...");
      return false;
    }

     await this.getPerson(cid);
    //this.presentLoading();
    /*
    await this.http.post(this.API_URL + "/person/",{cid: cid}).subscribe(res => {
      let data =  res.json();
      let person = data.rows[0][0];
      console.log(person);
      if(person.CID == ""){
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
        
        //if(person.AGE < 35){
          //this.closeLoading();
          //this.showTrue = false;
          //this.Alert("อายุไม่ได้อยู่ในช่วงการคัดกรอง...");
          //return false;
        //}
        
      }
      this.age = person.AGE;
      this.hospcode = person.HOSPCODE;
    })
    */
  }

  async getPerson(cid){
    this.isLoading = true;
    this.showperson = false;
    let res: any = await this.service.getPerson(cid);
    console.log(res.rows);
    let count: number = 0;
    let person = res.rows[0][0];
    count = res.rows[0].length;
    console.log(count);
    
    //this.presentLoading();
    if(count <= 0){
      //this.closeLoading();
      this.isLoading = false;
      //this.showsearch = true;
      //this.showperson = false;
      this.Alert("ไม่พบข้อมูลในระบบจังหวัด...");
      this.ngOnInit();
      //this.router.navigateByUrl('/home');
    } else {
      this.isLoading = false;
      //this.closeLoading();
      //this.showsearch = false;
      //this.showperson = true;
      this.name = person.NAME;
      this.lname = person.LNAME;
      if(person.SEX == 1){
        this.sex = "M";
      } else {
        this.sex = "F";
      }

      this.age = person.AGE;
      this.hospcode = person.HOSPCODE;
    }
    
    
  }

 async save() {
    if (!this.cid || !this.name || !this.lname || !this.age || !this.sex) {
      this.Alert("กรอกข้อมูลไม่ครบ...");
      return false;
    }
    
    let school = "";
    if(this.type == 1){
      school = "";
    } else {
      school = this.school.id;
    }
    let data = {
      cid: this.cid,
      sex: this.sex,
      name: this.name,
      lname: this.lname,
      age: this.age,
      privilege: this.privilege,
      hospcode: this.hospcode,
      type: this.type,
      school: school
    }
    //console.log(data);
    sessionStorage.setItem("form", JSON.stringify(data));
    this.router.navigateByUrl('/page1');
  }

  async getSchool(){
    await this.http.get(this.API_URL_NCD + "/school/").subscribe(res => {
      let data =  res.json();
      let school = data.rows;
      this.schoolList = school;
      //console.log(school);
    })
  }

  async checkType(){
    this.showperson = false;
    let type = this.type;
    if(type == 1){
      this.showType = true;
    } else if(type == 2){
      this.showType = false;
    }
  }

  async refresh(){
    //this.cid = "";
    this.ngOnInit();
  }

}
