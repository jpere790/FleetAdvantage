import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule} from  '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { isDateLessThanTomorrowValidatorDirective} from './customValidator.directive'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    isDateLessThanTomorrowValidatorDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
