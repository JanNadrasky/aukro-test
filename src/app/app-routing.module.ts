import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFetcherComponent } from './pages/photo-fetcher/photo-fetcher.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'phone-fetcher',
},{
  path: 'phone-fetcher',
  component: PhotoFetcherComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
