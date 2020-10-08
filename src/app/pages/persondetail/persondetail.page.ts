import { Component, OnInit,Input } from '@angular/core';
import { ModalController  } from '@ionic/angular';

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
  constructor(
    public viewCtrl: ModalController 
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
