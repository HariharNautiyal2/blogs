

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import {Blog} from './blog';
import{InterceptRouterlinkDirective}from'./directive';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import {AppRoutingModule} from './app.routes';


import { ServiceWorkerModule } from '@angular/service-worker';
import { UpdateService } from './checkforup.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
 AppRoutingModule,
 ServiceWorkerModule.register('ngsw-worker.js', {
   enabled: !isDevMode(),
   // Register the ServiceWorker as soon as the application is stable
   // or after 30 seconds (whichever comes first).
   registrationStrategy: 'registerWhenStable:30000'
 })

  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers:[UpdateService, provideClientHydration()]
})
export class AppModule { }
