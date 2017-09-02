import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from "./components/topHeader.component";
import { BottomFooterComponent } from "./components/bottomFooter.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BottomFooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
