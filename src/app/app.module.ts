import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { HomeModule } from './content/index';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartService, ReviewService} from './shared/index'; // сервисы


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        HttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ChartService, ReviewService]
})
export class AppModule { }
