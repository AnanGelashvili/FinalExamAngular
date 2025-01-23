import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RoleGuard } from './guards/role.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [RoleGuard], // Use the RoleGuard here
    data: { role: 'user' }, // Only 'user' role can access this page
  },
  {
    path: 'admin',
    component: ProfileComponent, // Replace with your admin page component
    canActivate: [RoleGuard],
    data: { role: 'admin' }, // Only 'admin' role can access this page
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
