import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  cmimi: number;
  id: string | number;
}

const ELEMENT_DATA: any = {
  kafe: [
    { id: '1', name: 'kafe', sasia: '10', cmimi: 100, konfirmo: '' },
    { id: '2', name: 'kafe', sasia: '10', cmimi: 100, konfirmo: '' },
  ],
  freskuese: [
    { id: '3', name: 'kola', sasia: '10', cmimi: 100, konfirmo: '' },
    { id: '4', name: 'kola', sasia: '10', cmimi: 100, konfirmo: '' },
  ],
  alkol: [
    { id: '5', name: 'jack', sasia: '10', cmimi: 100, konfirmo: '' },
    { id: '6', name: 'jack', sasia: '10', cmimi: 100, konfirmo: '' },
  ],
  tjera: [
    { id: '7', name: 'uje', sasia: '10', cmimi: 100, konfirmo: '' },
    { id: '8', name: 'uje', sasia: '10', cmimi: 100, konfirmo: '' },
  ],
};

@Component({
  selector: 'app-employeer',
  templateUrl: './employeer.component.html',
  styleUrls: ['./employeer.component.scss'],
})
export class EmployeerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'sasia', 'price', 'konfirmo'];
  dataSource = [];
  artikujtEZgjedhur: any[] = [];

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {}

  

  populateTable(produkt: string) {
    this.dataSource = ELEMENT_DATA[produkt];
  }

  confirm(item: any) {
    if ((this.artikujtEZgjedhur.length = 0)) {
      item.sasia = 1;
      this.artikujtEZgjedhur.push(item);
    } else {
      this.artikujtEZgjedhur.map((artikull: any) => {
        if (artikull.id === item.id) {
          artikull.cmimi = artikull.cmimi + artikull.cmimi;
          artikull.sasia = artikull.sasia + 1;
          console.log(this.artikujtEZgjedhur)
          
        } else {
          item.sasia = 1;
          this.artikujtEZgjedhur.push(item);
          console.log(this.artikujtEZgjedhur);

        }
      });
    }
  }

  getTotalCost() {
    return this.artikujtEZgjedhur
      .map((t) => t.cost)
      .reduce((name, cmimi) => name + cmimi, 0);
  }

  onLogout(){

    this.firebase.signOut();

}

}
