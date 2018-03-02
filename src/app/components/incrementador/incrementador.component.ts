import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('nombre') leyenda; string = 'leyenda';
  @Input() porsentaje: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('leyenda', this.leyenda);
    console.log('porsentaje', this.porsentaje);
  }

  ngOnInit() {
    // console.log('leyenda', this.leyenda);
    console.log('porsentaje', this.porsentaje);
  }
  onChanges(newValue: number) {

    //  let elemHTML: any = document.getElementsByName('porsentaje')[0];

    // console.log( this.txtProgress );

    if ( newValue >= 100 ) {
      this.porsentaje = 100;
    } else if ( newValue <= 100 ) {
      this.porsentaje = 0;
    } else {
      this.porsentaje = newValue;
    }
    // elemHTML.value = this.porsentaje;
    this.txtProgress.nativeElement.value = this.porsentaje;
    this.cambioValor.emit(this.porsentaje);
  }

  cambiarValor( valor ) {
    if (this.porsentaje >= 100 && valor > 0) {
      this.porsentaje = 100;
      return;
    }

    if (this.porsentaje <= 0 && valor < 0) {
      this.porsentaje = 0;
      return;
    }
    this.porsentaje = this.porsentaje + valor;
    this.cambioValor.emit(this.porsentaje);

    this.txtProgress.nativeElement.focus();
  }

}
