import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedexMaterialModule } from './app-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { AppCommonsModule } from './app-commons/app-commons.module';
import { MedexUtilitiesModule } from './medex-utilities/medex-utilities.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MedexMaterialModule,
    HttpClientModule,
    AppCommonsModule,
    MedexUtilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
