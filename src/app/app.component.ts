import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { PaymentStatusComponent } from './components/payment-status/payment-status.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cdk-portal';
  constructor(private modalService: ModalService){}

  openPortal() {
    this.modalService.openPortal({
      component: PaymentStatusComponent,
      inputs: {
        title: 'Payment Status'
      },
      outputs: {
        titleClicked: ()=>{
          console.log('modal emitted click back to app component')
        }
      },
      hasBackDrop: true
    });
  }
}
