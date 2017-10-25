import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './index';
import { HomeRoutingModule } from './home-routing.module';
import { InfoModule } from './info/index';
import { ReviewModule } from './review/index';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, InfoModule, ReviewModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: []

})
export class HomeModule {

}
