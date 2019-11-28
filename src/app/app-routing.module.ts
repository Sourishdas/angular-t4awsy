import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  } ,
  {
    path: 'contact',
    loadChildren: 'app/contact/contact.module#ContactModule'
  },
   {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule'
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[HomeComponent],
  providers: []
})
export class AppRoutingModule { }
