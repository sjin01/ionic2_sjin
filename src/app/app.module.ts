import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {RecordPage} from '../pages/record/record';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppVersion} from '@ionic-native/app-version';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {Camera} from '@ionic-native/camera';
import {Toast} from '@ionic-native/toast';
import {File} from '@ionic-native/file';
import {Transfer} from '@ionic-native/transfer';
import {ImagePicker} from '@ionic-native/image-picker';
import {Network} from '@ionic-native/network';

import {HttpModule} from "@angular/http";

import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";
import {NativeService} from "../providers/NativeService";
import {FileService} from "../providers/FileService";
import {Helper} from "../providers/Helper";
import {Utils} from "../providers/Utils";

@NgModule({
  declarations: [
    MyApp,
    RecordPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecordPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    GlobalData,
    NativeService,
    FileService,
    Helper,
    Utils,
    InAppBrowser, AppVersion, Camera, Toast, File, Transfer, ImagePicker, Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
