import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BlogComponent } from '../components/blog/blog.component';
import { AboutComponent } from '../components/about/about.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
