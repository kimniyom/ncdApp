import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  cid;
  constructor() { }

  ngOnInit() {
    this.cid = "1539699927345";
  }

}
