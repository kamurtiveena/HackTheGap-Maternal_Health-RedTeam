import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { TTSComponent } from './text-to-speech/tts.module';
import { RegistrationComponent } from './registration/registration.component';
import { SkillsComponent } from './skills/skills.component';
import { AdminComponent } from './admin/admin.component';
import { AllUsersComponent } from './all-users/allusers.component';
import { ProfileComponent } from './dashboard/profile.component';
import { ProgressComponent } from './profile/progress.component';
import { AboutUsComponent } from './aboutus/aboutus.component';

// Routing configuration
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: ProfileComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'adminpanel', component: AllUsersComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
