import { NgModule }             from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoggedInGuard } from './logged-in.guard';

import { AppComponent }         from './app.component';
import { BearComponent }   from './liste/bear.component';
import { HomeComponent }  from './home/home.component';
import { BearDetailComponent }  from './detail/bear-detail.component';
import { visucanvasComponent }  from './visualizer/visucanvas.component'; 
import { LandingPageComponent }  from './home/landingpage.component';
import { AdminComponent }  from './admin/admin.component';
import { LoginComponent }  from './login/login.component';
import { FormComponent }  from './login/form.component';
import { visucanvasGreenComponent }  from './visualizer/greenvisualizer.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'wolf',  component: BearComponent },
  { path: '9icke$17',  component: AdminComponent },
  { path: 'landingpage',  component: LandingPageComponent },
  { path: 'inscription',     component: FormComponent },
  { path: 'update/:id',     component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bear/:id', component: BearDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
