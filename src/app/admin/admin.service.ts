import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Admin } from './admin';

@Injectable()
export class AdminService {
    username: string;
    constructor(private http: HttpClient) { }

    // Makes a get request to the backend to fetch users data
    getUsers(): Observable<Admin[]> {
        return this.http.get<Admin[]>('http://localhost:3000/getadmin').pipe(
            catchError(this.handleError));
    }

    // Invoked if an error is thrown in the get request
    private handleError(err: HttpErrorResponse) {
        console.error(err);
        return Observable.throw(err.error() || 'Server error');
    }
}
