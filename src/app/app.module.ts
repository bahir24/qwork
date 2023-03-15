import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {MainModule} from "./pages/main/main.module";
import {MenubarModule} from 'primeng/menubar';
import {ImageModule} from "primeng/image";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ServicesModule} from "./pages/services/services.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    ServicesModule,
    MenubarModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
