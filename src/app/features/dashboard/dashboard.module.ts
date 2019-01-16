import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './page/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactTableComponent } from './components/contact-table/contact-table.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DashboardComponent, ContactTableComponent],
})
export class DashboardModule {}
