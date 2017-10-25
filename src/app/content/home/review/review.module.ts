import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import {ReviewComponent, SendComponent, VisitorsComponent} from './index';
import {ReviewRoutingModule} from './review-routing.module';

@NgModule({
    imports: [CommonModule, ReviewRoutingModule, FormsModule],
    declarations: [
        ReviewComponent,
        SendComponent,
        VisitorsComponent
    ],
    exports: [
        ReviewComponent,
        SendComponent,
        VisitorsComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'ru-Ru' }
    ]

})
export class ReviewModule {

}
