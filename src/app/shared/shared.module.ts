import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, ButtonComponent, ContactCardComponent],
  exports: [HeaderComponent, ButtonComponent, ContactCardComponent],
})
export class SharedModule {}
