import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TRANSLATIONS } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { TTSComponent } from './text-to-speech/tts.module';
import { RegistrationComponent } from './registration/registration.component';
import { SkillsComponent } from './skills/skills.component';
import { AdminComponent } from './admin/admin.component';
import { AllUsersComponent } from './all-users/allusers.component';
// import {ProductsModule} from './products/products.module'
import { MatBadgeModule } from '@angular/material/badge';
import { ProfileComponent } from './dashboard/profile.component';
import { ProgressComponent } from './profile/progress.component';
import { AboutUsComponent } from './aboutus/aboutus.component';

const translations = 'Hey Man';
@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, MatBadgeModule],
    declarations: [AppComponent, WelcomeComponent, LoginComponent, TTSComponent, AboutUsComponent, AdminComponent, ProgressComponent, RegistrationComponent, SkillsComponent, AllUsersComponent, ProfileComponent],
    providers: [{ provide: TRANSLATIONS, useValue: translations }],
    bootstrap: [AppComponent]
})
export class AppModule { }
