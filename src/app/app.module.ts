import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router'
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FilmListComponent } from './pages/films/film-list/film-list.component';
import { FilmEditComponent } from './pages/films/film-edit/film-edit.component';
import { FilmItemComponent } from './pages/films/film-list/film-item/film-item.component';

import { ProductsComponent } from './pages/products/products.component';
import { ProductEditComponent } from './pages/products/product-edit/product-edit.component';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import {SharedModule} from "./shared/shared.module";
import {EffectsModule} from "@ngrx/effects";
import {appReducers} from "./store/store.reducers";


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmEditComponent,
    FilmItemComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterOutlet,
    StoreModule.forRoot({state: appReducers}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
