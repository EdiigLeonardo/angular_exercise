import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent implements OnInit {

  constructor() { }


  @Input() text="";
  @Input() color="";

  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
