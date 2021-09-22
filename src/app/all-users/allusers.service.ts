import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Login } from './AllUsers';

@Injectable()
export class LoginService {
    username: string;
    constructor(private http: HttpClient) { }

    // Makes a get request to the backend to fetch users data
    getUsers(): Observable<Login[]> {
        return this.http.get<Login[]>('http://localhost:3000/getAllUsers').pipe(
            catchError(this.handleError));
    }

    registerUser(): Observable<Login[]> {
        return this.http.get<Login[]>('http://localhost:3000/registeruser?name=Veena&age=22&qualification=Employee&phone=8087116728&education=Engineering&experience=2&email=kamurtiveena@gmail.com&address=Maharashtra&marital=Yes&nameofvolunteer=Shridhar&language=Marathi&weeklyhours=10').pipe(
            catchError(this.handleError));
    }

    // Invoked if an error is thrown in the get request
    private handleError(err: HttpErrorResponse) {
        console.error(err);
        return Observable.throw(err.error() || 'Server error');
    }
}
