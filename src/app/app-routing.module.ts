import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '*', component: ProductsComponent
  },
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
