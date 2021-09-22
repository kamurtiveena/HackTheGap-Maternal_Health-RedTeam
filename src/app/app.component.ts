import { Component, DoCheck, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';

import { TRANSLATIONS } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const translations = '';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [{ provide: LOCALE_ID, useValue: translations }]
})
export class AppComponent implements DoCheck {
    pageTitle = 'Sankofa Maternal';
    loginTitle = 'Login';
    userName: string;
    registerTitle = 'Register';
    skillsTitle = 'Skills';
    getText = translations;
    adminPanel = 'Admin';
    constructor(private _router: Router) { }

    ngDoCheck(): void {
        this.userName = sessionStorage.getItem('username');
    }

    // Invoked when user clicks on login button
    // Navigates to login page
    login() {
        const value = document.getElementById('login').innerHTML;
        if (value === 'Login') {
            this._router.navigate(['/login']);
        } else if (value === 'Logout') {
            sessionStorage.clear();
            document.getElementById('login').innerHTML = 'Login';
            document.getElementById('welcome').style.display = 'none';
            this._router.navigate(['/welcome']);
        }
    }
    register() {
        const value = document.getElementById('register').innerHTML;
        if (value === 'Register') {
            this._router.navigate(['/register']);
        } else if (value === 'Logout') {
            sessionStorage.clear();
            document.getElementById('login').innerHTML = 'Login';
            document.getElementById('welcome').style.display = 'none';
            this._router.navigate(['/register']);
        }
    }

    skills() {
        const value = document.getElementById('skills').innerHTML;
        if (value === 'Skills') {
            this._router.navigate(['/skills']);
        }
    }
    adminLogin() {
        const value = document.getElementById('login').innerHTML;
        if (value === 'Login') {
            this._router.navigate(['/admin']);
        }
    }

}
