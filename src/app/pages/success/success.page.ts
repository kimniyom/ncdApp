import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { StatusBar, } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(
    private router: Router,
    private http: Http,
    private alert: AlertController,
    private loadingController: LoadingController,
    private statusBar: StatusBar,
  ) { }

  ngOnInit() {
    //this.loadingController.dismiss(null);

    //const { role, data } = await loading.onDidDismiss();

    //console.log('Loading dismissed!');
  }

}
