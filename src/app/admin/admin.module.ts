import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    MenuComponent,
    ProductsComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
    
    

  ]
})
export class AdminModule { }
