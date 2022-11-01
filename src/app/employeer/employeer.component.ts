import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any = {
  'kafe':
    [
      { id: '1', name: 'kafe', sasia: '10', cmimi: 100, konfirmo: '' },
      { id: '2', name: 'kafe', sasia: '10', cmimi: 100, konfirmo: '' },
    ],
  'freskuese':
    [
      { id: '3', name: 'kola', sasia: '10', cmimi: 100, konfirmo: '' },
      { id: '4', name: 'kola', sasia: '10', cmimi: 100, konfirmo: '' },
    ],
  'alkol':
    [
      { id: '5', name: 'jack', sasia: '10', cmimi: 100, konfirmo: '' },
      { id: '6', name: 'jack', sasia: '10', cmimi: 100, konfirmo: '' },
    ],
  'tjera':
    [
      { id: '7', name: 'uje', sasia: '10', cmimi: 100, konfirmo: '' },
      { id: '8', name: 'uje', sasia: '10', cmimi: 100, konfirmo: '' },
    ]

}


@Component({
  selector: 'app-employeer',
  templateUrl: './employeer.component.html',
  styleUrls: ['./employeer.component.scss'],

})
export class EmployeerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'sasia', 'price', 'konfirmo'];
  dataSource = [];
  artikujtEZgjedhur: any[] = []

  populateTable(produkt: string) {
    this.dataSource = ELEMENT_DATA[produkt]
  }

  confirm(item: any) {
    if(this.artikujtEZgjedhur.length = 0){
      item.sasia = 1
      this.artikujtEZgjedhur.push(item)
    }else{
      this.artikujtEZgjedhur.map((artikull : any) => {
        if(artikull.id === item.id){
          artikull.cmimi = artikull.cmimi + artikull.cmimi
          artikull.sasia = artikull.sasia + 1
        }else{
          artikull.sasia = 1
        }
      })
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}
