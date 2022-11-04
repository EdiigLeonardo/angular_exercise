import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RespondidoComponent} from "./pages/respondido/respondido.component";
import {PorResponderComponent} from "./pages/por-responder/por-responder.component";

const routes: Routes = [
  // {path: '' , redirectTo:'/home', pathMatch: 'full'},
  {path: 'respondido', component: RespondidoComponent},
  {path: 'poresponder', component: PorResponderComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
