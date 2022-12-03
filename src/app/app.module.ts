import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { TopbarComponent } from './components/generic/topbar/topbar.component';

@NgModule({
  declarations: [AppComponent, TopbarComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, LayoutsModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
