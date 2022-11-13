import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employeer',
  templateUrl: './employeer.component.html',
  styleUrls: ['./employeer.component.scss'],
})
export class EmployeerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'sasia', 'price', 'konfirmo'];
  dataSource = [];
  artikujtEZgjedhur: any[] = [];
  item: any;
  updatedItems: any = [];
  displayedColumnscosttable: string[] = ['item', 'cost'];
  transactions: any[] = [];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions
      .map((t) => t.cost)
      .reduce((acc, value) => parseInt(acc) + parseInt(value), 0);
  }

  constructor(
    private firebase: FirebaseService,
    private route: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.firebase.getData().subscribe((data: any) => {
      let kafe: any = [];
      let freskuese: any = [];
      let alkol: any = [];
      let tjera: any = [];
      data.map((values: any) => {
        if (values.lloji === 'kafe') {
          kafe.push(values);
        }
        if (values.lloji === 'tjera') {
          tjera.push(values);
        }
        if (values.lloji === 'freskuese') {
          freskuese.push(values);
        }
        if (values.lloji === 'alkolike') {
          alkol.push(values);
        }
      });
      this.item = {
        kafe: kafe,
        freskuese: freskuese,
        alkol: alkol,
        tjera: tjera,
      };
    });
  }
  printThisPage() {
    this.updatedItems.map((item: any) => {
      this.firebase.ndryshoProdukt(item);
    });
  }

  populateTable(produkt: string) {
    this.dataSource = this.item[produkt];
  }

  confirm(item: any, items: any[]) {
    let internalItem = {
      name: item.emer,
      Id: item.id,
      price: item.cmimi,
      quantity: item.sasia,
    };
    let displayItem: any = {
      item: item.emer,
      cost: item.cmimi,
    };
    if (this.artikujtEZgjedhur.length === 0) {
      internalItem.quantity = 1;
      this.artikujtEZgjedhur.push(internalItem);
      item.sasia = parseInt(item.sasia) - 1;
      console.log('artikujt e zgjedhur bosh');

      this.transactions = [...this.transactions, displayItem];
      this.updatedItems = [...this.updatedItems, item];
    } else {
      for (var i = 0; i < this.artikujtEZgjedhur.length; i++) {
        if (item.sasia === 0) {
          alert('Produkti nuk mbetet ne stok');
        } else {
          if (this.artikujtEZgjedhur[i].Id === internalItem.Id) {
            let sasia = parseInt(this.artikujtEZgjedhur[i].quantity);
            let cmimi = parseInt(this.artikujtEZgjedhur[i].price);
            this.artikujtEZgjedhur[i].quantity = sasia + 1;
            this.artikujtEZgjedhur[i].price =
              cmimi + parseInt(internalItem.price);
            let index = this.updatedItems.indexOf(item);
            this.transactions[
              this.transactions.findIndex(function (test) {
                return test.item === internalItem.name;
              })
            ].cost = cmimi + parseInt(internalItem.price);
            this.updatedItems[index].sasia = this.updatedItems[index].sasia - 1;
            break;
          } else {
            if (i === this.artikujtEZgjedhur.length - 1) {
              console.log(internalItem);
              internalItem.quantity = 1;
              this.transactions = [...this.transactions, displayItem];
              this.updatedItems = [...this.updatedItems, item];
              this.artikujtEZgjedhur = [
                ...this.artikujtEZgjedhur,
                internalItem,
              ];
              break;
            }
          }
        }
      }
    }
  }

  onLogout() {
    this.auth.isLoggedIn = false;
    this.auth.isAdmin = false;
    localStorage.removeItem('login');
    localStorage.clear();
    this.route.navigate(['']);
  }
}
