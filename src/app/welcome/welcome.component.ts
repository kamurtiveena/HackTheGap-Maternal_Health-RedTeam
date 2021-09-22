import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle = 'Welcome';

    constructor(private router: Router) {
        document.getElementById('login').style.display = '';
    }
    aboutus() {
        this.router.navigate(['/aboutus']);
    }
    sendEmail() {
        // Email.send({
        // Host: "smtp.gmail.com",
        // Username : "<sender’s email address>",
        // Password : "<email password>",
        // To : '<recipient’s email address>',
        // From : "<sender’s email address>",
        // Subject : "<email subject>",
        // Body : "<email body>",
        // }).then(
        //     message => alert("mail sent successfully")
        // );
    }
}
