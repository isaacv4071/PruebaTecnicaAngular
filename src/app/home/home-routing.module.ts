import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesGuard } from '../guards/routes.guard';
import { CreateUsersComponent } from '../users/create-users/create-users.component';
import { UpdateUsersComponent } from '../users/update-users/update-users.component';
import { UsersComponent } from '../users/users.component';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: { roles: ['dashboard_access'], preload: true}
      },
      {
        path: 'users',
        canActivate: [RoutesGuard],
        component: UsersComponent
      },
      {
        path: "**",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
