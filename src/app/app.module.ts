import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpskillDivComponent } from './component/upskill-div/upskill-div.component';
import { PerguntaComponent } from './component/pergunta/pergunta.component';
import { OpcaoItemComponent } from './component/opcao-item/opcao-item.component';
import { SemRespostaComponent } from './component/sem-resposta/sem-resposta.component';
import { RespondidoComponent } from './pages/respondido/respondido.component';
import { PorResponderComponent } from './pages/por-responder/por-responder.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './component/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UpskillDivComponent,
    PerguntaComponent,
    OpcaoItemComponent,
    SemRespostaComponent,
    RespondidoComponent,
    PorResponderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
