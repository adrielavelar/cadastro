import { Routes } from '@angular/router';
import { ListUserComponent } from './views/user/list/list-user.component';
import { CreateUserComponent } from './views/user/create/create-user.component';

export const routes: Routes = [
    {
        path: 'user/list',
        component: ListUserComponent,
    },
    {
        path: 'user/create',
        component: CreateUserComponent,
    },
    {
        path: '**',
        redirectTo: 'user/list',
    },
] 
