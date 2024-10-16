import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { BloggerComponent } from './blogger/blogger.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatIconModule } from "@angular/material/icon";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BloggerComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgxMatFileInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
