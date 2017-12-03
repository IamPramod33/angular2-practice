
import { HomeComponent } from './pages/home/home.component';

const routes = [
    { path: 'home', component: HomeComponent },

    // Not found
    { path: '**', redirectTo: 'home' }

];

export default routes;
