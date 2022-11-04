import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Resposta} from "../../Resposta";

@Component({
  selector: 'app-sem-resposta',
  templateUrl: './sem-resposta.component.html',
  styleUrls: ['./sem-resposta.component.css']
})
export class SemRespostaComponent implements OnInit {

  constructor() { }

  @Input() resposta!: Resposta;

  ngOnInit(): void {
  }

}
