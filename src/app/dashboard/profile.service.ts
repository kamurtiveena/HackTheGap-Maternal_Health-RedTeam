import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
    username: string;
    constructor(private http: HttpClient) { }

    // Makes a get request to the backend to fetch users data
    getUsers() {
        return this.http.get('http://localhost:3000/getcredentials?userName=Veena&password=Veena221').pipe(
            catchError(this.handleError));
    }

    // Invoked if an error is thrown in the get request
    private handleError(err: HttpErrorResponse) {
        console.error(err);
        return Observable.throw(err.error() || 'Server error');
    }
}
