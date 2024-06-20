import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FilmListComponent } from "./pages/films/film-list/film-list.component";
import { FilmEditComponent } from "./pages/films/film-edit/film-edit.component";

import { ProductsComponent } from "./pages/products/products.component";
import { ProductEditComponent } from "./pages/products/product-edit/product-edit.component";

const routes: Routes = [
    {
        path: 'films',
        children: [
            {
                path: '',
                component: FilmListComponent
            },
            {
                path: ':id',
                component: FilmEditComponent
            }
        ]
    },
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductsComponent
            },
            {
                path: ':id',
                component: ProductEditComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'films',
        pathMatch: 'full'
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true }),],
    exports: [RouterModule]
})
export class AppRoutingModule { }