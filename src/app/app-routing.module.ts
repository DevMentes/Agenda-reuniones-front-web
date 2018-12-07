import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundPageComponent } from './Pages/notfound-page/notfound-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {AuthGuard} from './Guards/auth.guard';
import {NoAuthGuard} from './Guards/no-auth.guard';
import {LandingComponent} from './Pages/landing/landing.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component: LandingComponent, canActivate:[NoAuthGuard]},
  {path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

  // Crear Todas las paginas nueva arriba de esta linea
  {path: '**', component: NotfoundPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
