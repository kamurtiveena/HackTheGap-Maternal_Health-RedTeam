import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './profile.service';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [LoginService]
})
export class ProfileComponent {
    getProducts: "Products";
    users: any;
    valid = true;
    isLoggedIn = 'false';

    constructor(private router: Router, private loginService: LoginService) {
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
    goToProduct() {
        this.router.navigate(['/products']);
    }
    goToRe() {
        window.location.href = 'http://127.0.0.1:5500/src/app/translation.html';
    }
    goToOpp() {
        window.location.href = 'https://www.amanet.org/';
    }
    goToWork() {
        window.location.href = 'https://go.liveyourdream.org/take-action';
    }
    goToProgress() {
        this.router.navigate(['/progress']);
    }

}
