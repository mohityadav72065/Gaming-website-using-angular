import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Verify } from './pages/verify/verify';
import { Terms } from './pages/terms/terms';
import { Personal } from './pages/personal/personal';
import { Address } from './pages/address/address';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'verify',
    component: Verify
  },

  {
    path: 'terms',
    component: Terms
  },

  {
    path: 'personal',
    component: Personal
  },
  {
  path:'address',
  component: AddressComponent
}

];