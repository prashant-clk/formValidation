import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UserManage } from './component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    UserManage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [UserManage]
})
export class AppModule { }
