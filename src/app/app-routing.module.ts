import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { SliderComponent } from './slider/slider.component';
const routes: Routes = [
 
  {path: 'home', component:CategoryComponent && SliderComponent},
   
  { path: 'add-product', component: ProductAddComponent},
  { path: 'products', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
