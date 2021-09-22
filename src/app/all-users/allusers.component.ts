import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './AllUsers';
import { LoginService } from './allusers.service';

@Component({
    templateUrl: './allusers.component.html',
    styleUrls: ['./allusers.component.css'],
    providers: [LoginService]
})
export class AllUsersComponent {
    showWork = 0;
    login = new Login();

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


}
