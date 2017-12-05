
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users/users.component';

const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },

    // Not found
    { path: '**', redirectTo: 'users' }

];

export default routes;
