import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porsentaje1: number = 20;
  porsentaje2: number = 30;

  constructor() { }

  ngOnInit() {
  }
  actualizar(event: number) {
    console.log('evento', event );
    this.porsentaje1 = event;
  }
}
