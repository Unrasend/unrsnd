import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { TestComponent } from './features/test/test.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
