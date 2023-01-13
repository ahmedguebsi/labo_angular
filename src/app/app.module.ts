import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MembersComponent} from './members/members.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MemberFormComponent} from './member-form/member-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { ToolsComponent } from './tools/tools.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AffectComponent } from './affect/affect.component';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { FirebaseModule } from './Firebase.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import{MatDatepickerModule}from'@angular/material/datepicker';
import{NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER}from'ngx-ui-loader';
import { AngularMaterialModule } from './material.module';
import { SignupComponent } from './signup/signup.component';

const ngxuiloader :  NgxUiLoaderConfig= {
  text: "loading",
  textColor: "#FFFFFF",
  textPosition: "center-center",
  fgsColor: "#7b1fa2",  
  bgsColor: "#7b1fa2",
  fgsSize: 100,
  hasProgressBar: false,
  fgsType: SPINNER.squareJellyBox,
}



@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    DashboardComponent,
    ArticlesComponent,
    EventsComponent,
    ToolsComponent,
    AffectComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    MatCardModule,MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,MatSidenavModule,MatToolbarModule,
    MatListModule,MatMenuModule,FlexLayoutModule , FirebaseModule,MatNativeDateModule,MatDatepickerModule,
    NgxUiLoaderModule.forRoot(ngxuiloader),
    AngularMaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}