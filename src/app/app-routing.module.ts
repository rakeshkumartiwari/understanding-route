import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGuardService } from './product/product-guard.service';


const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent, canActivate: [ProductGuardService] },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
