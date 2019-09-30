import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { environment } from 'src/environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormuladmPage } from './pages/formuladm/formuladm.page';
import { FormularhtPage } from './pages/formularht/formularht.page';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FormuladmPage,
    FormularhtPage
  ],
  entryComponents: [
    FormuladmPage,
    FormularhtPage
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'API_URL', useValue: environment.apiUrl },
    { provide: 'API_URL_NCD', useValue: environment.apiUrlNcd },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
