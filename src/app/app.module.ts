import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule,HttpClient,  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule
  ],
  providers: [ ],
  bootstrap: []
})
export class AppModule { }
