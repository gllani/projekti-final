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

  populateTable(produkt: string) {
    this.dataSource = this.item[produkt];
  }

  confirm(item: any) {
    let internalItem = {
      name: item.emer,
      Id: item.id,
      price: item.cmimi,
      quantity: item.sasia,
    };
    if (this.artikujtEZgjedhur.length === 0) {
      internalItem.quantity = 1;
      this.artikujtEZgjedhur.push(internalItem);
      item.sasia = parseInt(item.sasia) - 1;
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
            item.sasia = parseInt(item.sasia) - 1;
          } else {
            if (i === this.artikujtEZgjedhur.length -1) {
              console.log(internalItem);
              internalItem.quantity = 1;
              this.artikujtEZgjedhur = [
                ...this.artikujtEZgjedhur,
                internalItem,
              ];
            }
          }
        }
      }
    }
  }

  getTotalCost() {
    return this.artikujtEZgjedhur
      .map((t) => t.cost)
      .reduce((name, cmimi) => name + cmimi, 0);
  }

  onLogout() {
    this.auth.isLoggedIn = false;
    this.auth.isAdmin = false;
    localStorage.removeItem('login');
    localStorage.clear();
    this.route.navigate(['']);
  }
}
