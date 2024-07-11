import { ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs';


export interface modalConfig {
    component:  ComponentType<unknown> 
    inputs: {
     [key: string]: any
    };
    outputs: {
        [key: string]:  ()=>void
    };
    hasBackDrop?: boolean;
}