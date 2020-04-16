import { HomeComponent } from './home/home.component';
import { ElementsComponent } from './elements/elements.component';
import { GenericComponent } from './generic/generic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:GenericComponent},
  {path:'contacts', component:ElementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
