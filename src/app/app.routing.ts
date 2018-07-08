import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    loadChildren: './home/home.module'
  }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
