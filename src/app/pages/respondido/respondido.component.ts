import {Component, Input, OnInit} from '@angular/core';
import {Resposta} from "../../Resposta";
import {LISTA_respostas} from "../../component/opcao-item/mock-respostas";

@Component({
  selector: 'app-respondido',
  templateUrl: './respondido.component.html',
  styleUrls: ['./respondido.component.css']
})
export class RespondidoComponent implements OnInit {

  constructor() { }
  listaRespostas: Resposta[] = LISTA_respostas
  @Input() resposta = "";
  color = "green";

  ngOnInit(): void {
  }

}
