import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentStatusComponent } from './components/payment-status/payment-status.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { GenericAccordionComponent } from './components/generic-accordion/generic-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericAccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PaymentStatusComponent,
    PortalModule,
    OverlayModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
