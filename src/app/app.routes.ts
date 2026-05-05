import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AddAttraction } from './pages/add-attraction/add-attraction';

export const routes: Routes = [
    { path: '', component: Home },

    { path: 'add-attraction', component: AddAttraction },

    { path: 'attractions/:uuid', component: Home },

    { path: '**', redirectTo: '' }

];
