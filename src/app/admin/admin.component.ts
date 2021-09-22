import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Admin } from './admin';
import { AdminService } from './admin.service';

@Component({
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    providers: [AdminService]
})
export class AdminComponent {

    login = new Admin();

    users: any;
    valid = true;
    isLoggedIn = 'false';

    constructor(private router: Router, private loginService: AdminService) {
        document.getElementById('login').style.display = 'none';
        // Makes a service call to fetch users data from backend
        this.loginService.getUsers()
            .subscribe(users => {
                this.users = users
                console.log(users)
            });
    }

    // Invoked when user clicks submit in login form
    // Validates the credentials with the fetched data from the database
    onSubmit() {
        this.valid = true;
        const name = this.login.userName;
        sessionStorage.setItem('username', this.login.userName);
        const password = this.login.password;
        if (name === this.users.userName && password === this.users.password) {
            this.isLoggedIn = 'true';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            this.router.navigate(['/adminpanel']);
        } else {
            this.isLoggedIn = 'false';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            this.valid = false;
        }
    }
}
