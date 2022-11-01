import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProduktetComponent } from './admin-produktet/admin-produktet.component';
import { EmployeerComponent } from './employeer/employeer.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';

const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-produktet', component: AdminProduktetComponent },
  { path: 'employeer', component: EmployeerComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'navbar-admin', component: NavbarAdminComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
