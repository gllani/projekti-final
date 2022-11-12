import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { FormService } from './services/form.service';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-admin-produktet',
  templateUrl: './admin-produktet.component.html',
  styleUrls: ['./admin-produktet.component.scss'],
})
export class AdminProduktetComponent implements OnInit, AfterViewInit {

  addProduct: boolean = false;
  editProduct: boolean = false;
  deleteProduct: boolean = false;
  showModal: boolean = false;
  form!: FormGroup;
  data: any = [];

  dataSource = new MatTableDataSource(this.data);
  dataSourceWithPageSize = new MatTableDataSource(this.data);
  @ViewChild('paginator')
  paginator!: MatPaginator;

  constructor(
    private router: Router,
    private fromService: FormService,
    private firebase: FirebaseService
  ) {}

  setShowModal(value: boolean, item: any) {
    console.log(item);
    this.fromService.deleteItem = item;
    this.showModal = value;
  }
  pageSizes = [3, 5, 7];

  deleteFunction(event: any) {
    if (event.type === 'yes') {
      this.firebase.fshiProdukt(event.id);
      this.showModal = false;
    }
    if (event.type === 'close' || event.type === 'no') {
      this.showModal = false;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.fromService.editableData = {
      id: 0,
      emer: '',
      cmimi: 0,
      sasia: 0,
      lloji: '',
    };
    this.firebase.getData().subscribe((data: any) => {
      console.log('data nga firebasi', data);
      this.data = data;
    });
    this.form = new FormGroup({
      Id: new FormControl('', Validators.required),
      Emri: new FormControl('', Validators.required),
      Cmimi: new FormControl('', Validators.required),
    });
  }

  goToEdit(item: any) {
    this.editProduct = true;
    this.addProduct = false;
    this.fromService.editableData = item;
    this.router.navigate(['form']);
  }
  goToDelete(item: any) {
    this.deleteProduct = false;
    this.showModal = true;
    this.fromService.editableData = item;
  }
  goToAdd(item: any) {
    this.addProduct = true;
    this.editProduct = false;
    this.router.navigate(['form']);
    this.fromService.editableData = item;
  }
}
