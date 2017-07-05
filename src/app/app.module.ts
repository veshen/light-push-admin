import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApiService } from './util/api.service';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './util/dialog.component';
import { ChartComponent } from './util/chart.component';
import { OverviewChartComponent } from './home/overview/overview-chart/overview-chart.component';
import { OverviewComponent } from './home/overview/overview.component';
import { NsListComponent } from './home/ns-list/ns-list.component';
import { DialogInputComponent } from './util/dialog-input.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DialogComponent,
    HomeComponent,
    ChartComponent,
    OverviewChartComponent,
    OverviewComponent,
    NsListComponent,
    DialogInputComponent
  ],
  entryComponents: [
    DialogComponent,
    DialogInputComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    MdNativeDateModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
