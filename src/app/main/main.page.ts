import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
//import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../api/config.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  lietProvince = [];
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    @Inject('API_URL_NCD') private API_URL_NCD: string,
  ) { }

  ngOnInit() {
    this.getChangWat();
  }

  async getChangWat(){
    let res: any = await this.configService.getChangwat();
    console.log(res.row);
    this.lietProvince = res.row;
  }

}
