import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog } from './blog';



const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'some_blogs/welcome'
  },
  { path: ':repo/:directory/:file', component: Blog  },
  {
    path: ':repo/:file', component :Blog 
  },
  {
    path: ':repo/:directory/:directory2/:file', component :Blog, 
  },
  {
    path:':repo',redirectTo:':repo/readme'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
