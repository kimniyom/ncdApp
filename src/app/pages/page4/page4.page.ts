import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  smoke;
  public showSmoke: boolean;
  public showCancel: boolean;
  constructor(private router: Router
    ) { }
  
    ngOnInit() {
      this.showSmoke = false;
      this.showCancel = false;
    }
  
    save(){
      this.router.navigateByUrl('/page5');
    }

    getSmoke(){
      let smoke = this.smoke;
      alert(smoke);
      if(smoke == 1){
        this.showSmoke = true;
        this.showCancel = false;
        console.log(this.showSmoke);
      } else if(smoke == 3){
        this.showSmoke = false;
        this.showCancel = true;
      } else {
        this.showSmoke = false;
        this.showCancel = false;
      }
      
    }

}
