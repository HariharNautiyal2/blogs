import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Title, Meta } from '@angular/platform-browser';
import { Request, Response } from 'express';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { InterceptRouterlinkDirective } from './directive';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(
    private title: Title,
    private meta: Meta,
    private http:HttpClient
  ) {}

  // ...

  ngDoBootstrap(app: any) {


    // ...
  }
}