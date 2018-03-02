import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficoDona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('Label') public doughnutChartLabels: string[] = [];
  @Input('Data') public doughnutChartData: number[] = [];
  public doughnutChartType: string = 'doughnut';
  constructor() { }

  ngOnInit() {
    console.log(this.doughnutChartData);
    console.log(this.doughnutChartLabels);

  }

}
