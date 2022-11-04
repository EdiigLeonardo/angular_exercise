import {Component, Input, OnInit} from '@angular/core';
import {Resposta} from "../../Resposta";
import {LISTA_respostas} from "../../component/opcao-item/mock-respostas";

@Component({
  selector: 'app-por-responder',
  templateUrl: './por-responder.component.html',
  styleUrls: ['./por-responder.component.css']
})
export class PorResponderComponent implements OnInit {

  constructor() { }
  listaRespostas: Resposta[] = LISTA_respostas
  @Input() resposta = "";

  ngOnInit(): void {
  }

}
