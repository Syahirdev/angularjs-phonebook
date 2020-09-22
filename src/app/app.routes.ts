import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'directory',
    component: DirectoryComponent,
  },
  {
    path: 'directory/:person',
    component: DirectoryComponent,
  },
];
export const Routing = RouterModule.forRoot(routes);
