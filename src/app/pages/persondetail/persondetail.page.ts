import { Component, OnInit,Input } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.page.html',
  styleUrls: ['./persondetail.page.scss'],
})
export class PersondetailPage implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() sex: string;
  @Input() age: string;
  @Input() pcu: string;
  @Input() cid: string;
  @Input() school: string;
  @Input() privilege: string;
  @Input() type: string;
  constructor(
    public viewCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(){
    let data = {
      cid: this.cid,
      sex: this.sex,
      name: this.firstName,
      lname: this.lastName,
      age: this.age,
      privilege: this.privilege,
      hospcode: this.pcu,
      type: this.type,
      school: this.school
    }
    console.log(data);
    sessionStorage.setItem("form", JSON.stringify(data));
    this.dismiss();
    this.router.navigateByUrl('/page1');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
