import {Component, Input, OnInit} from '@angular/core';
import {LISTA_respostas} from "../opcao-item/mock-respostas";
import {Resposta} from "../../Resposta";

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {

  constructor() { }
  listaRespostas: Resposta[] = LISTA_respostas
  @Input() resposta = "";

  ngOnInit(): void {
  }

}
