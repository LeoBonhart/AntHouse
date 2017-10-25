import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent, UserComponent, InfoComponent }  from './index';
import { InfoRoutingModule } from './info-routing.module';

@NgModule({
    imports: [CommonModule, InfoRoutingModule],
    declarations: [
        ChartComponent,
        UserComponent,
        InfoComponent
    ],
    exports: [
        ChartComponent,
        UserComponent,
        InfoComponent
    ],
    providers: []

})
export class InfoModule {

}
