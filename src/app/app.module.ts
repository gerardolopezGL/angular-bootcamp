import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { AddContactModule } from './features/add-contact/add-contact.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, AddContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
