import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../all-users/allusers.service';

import { Login } from '../login/Login';
@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [LoginService]
})
export class RegistrationComponent {
    valid = true;
    login: any;
    isRegistered = true;
    constructor(private router: Router, private loginService: LoginService) {

    }
    onSubmit() {

        this.loginService.registerUser()
            .subscribe(users => {
                this.login = users;
                console.log(users)

            });
        this.isRegistered = false;
    }

}