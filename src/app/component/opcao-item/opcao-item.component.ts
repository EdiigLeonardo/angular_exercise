import {Component, Input, OnInit, Output} from '@angular/core';
import {Resposta} from "../../Resposta";

@Component({
  selector: 'app-opcao-item',
  templateUrl: './opcao-item.component.html',
  styleUrls: ['./opcao-item.component.css']
})
export class OpcaoItemComponent implements OnInit {

  constructor() { }
  @Input() resposta!: Resposta;
  @Output() color = "";

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.resposta.estado)
    if(this.resposta.estado){
      this.color = "green";
      console.log('works');
    }
  }


}
