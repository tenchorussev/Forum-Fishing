import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoaderComponent } from './shared/loader/loader.component';
import { AuthenticateComponent } from './core/authenticate/authenticate.component';
import { ErrorComponent } from './core/error/error.component';
import { FooterComponent } from './core/footer/footer.component';
import { GuardsComponent } from './core/guards/guards.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
   
    LoaderComponent,
        AuthenticateComponent,
        ErrorComponent,
        FooterComponent,
        GuardsComponent,
        HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
