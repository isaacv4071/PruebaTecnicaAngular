import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// FZ modules installed
import { FlexLayoutModule } from '@angular/flex-layout';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatFileUploadModule } from "mat-file-upload";
import { InlineSVGModule } from "ng-inline-svg";
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./common/material/material.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HomeModule } from './home/home.module';
import { UsersComponent } from './users/users.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { UpdateUsersComponent } from './users/update-users/update-users.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUsersComponent,
    UpdateUsersComponent,
    PaginatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HomeModule,
    HttpClientModule,
    MatFileUploadModule,
    NgxLoadingModule.forRoot({}),
    FlexLayoutModule,
    NgSelectModule,
    InlineSVGModule.forRoot(),
    AutocompleteLibModule,
    MaterialModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
