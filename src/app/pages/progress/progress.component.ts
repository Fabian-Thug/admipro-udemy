import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porsentaje: number = 50;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor ){
    if (this.porsentaje >= 100 && valor > 0){
      this.porsentaje = 100;
      return;
    }

    if (this.porsentaje <= 0 && valor < 0){
      this.porsentaje = 0;
      return;
    }
    this.porsentaje = this.porsentaje + valor;
  }

}
