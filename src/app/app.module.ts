import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule, TooltipModule, ModalModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatCardModule, MatPaginatorModule, MatSidenavModule, MatProgressSpinnerModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HouseCardsComponent } from './house-cards/house-cards.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { InfoHouseComponent } from './info-house/info-house.component';
import { BooksComponent } from './books/books.component';
import { InfoCharacterComponent } from './info-character/info-character.component';
import { UrlInfoDirective } from './url-info.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptor } from './interceptor/error-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HouseCardsComponent,
    InfoHouseComponent,
    BooksComponent,
    InfoCharacterComponent,
    UrlInfoDirective,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
