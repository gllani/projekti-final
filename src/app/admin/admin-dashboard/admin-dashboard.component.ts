import { Component } from '@angular/core';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  public produktet = {
    plugins: [ChartDataLabels],
    datasets: [
      {
        data: [20, 60, 60, 50, 60, 100, 40],
        label: 'Sasia Fillestare',
        type: 'bar',
        backgroundColor: '#FC8D02',
        hoverBackgroundColor: '#ffa726',
        fillColor: '#000000',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        datalabels: {
          align: 'bottom',
          color: 'black',
        },
      },
      {
        data: [10, 30, 30, 25, 40, 55, 30],
        label: 'Sasia e mbetur',
        type: 'bar',
        stack: 'Stack 0',
        backgroundColor: '#0FB6CB',
        hoverBackgroundColor: '#04cee7',
        fillColor: 'rgba(220,220,220,0.5)',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        datalabels: {
          align: 'bottom',
          color: 'black',
        },
      },
      {
        data: [10, 30, 30, 25, 20, 45, 10],
        label: 'Sasia e shitur',
        type: 'bar',
        stack: 'Stack 0',
        backgroundColor: '#848381',
        hoverBackgroundColor: '#848381',
        fillColor: 'rgba(220,220,220,0.5)',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        datalabels: {
          align: 'top',
          color: 'black',
        },
      },
    ],
    labels: [
      'Amita Pjeshke',
      'Amita qershie',
      'Bravo rrushi',
      'Bravo molle',
      'Bravo pjeshke',
      'Kapuccino',
      'Kafe',
    ],
    options: {
      responsive: true,
      tooltipTemplate: '<%= value %>',
      tooltipFillColor: 'rgba(0,0,0,0)',
      tooltipFontColor: '#444',
      tooltipEvents: [],
      tooltipCaretSize: 0,
      onAnimationComplete: function () {},
    },
  };
}
