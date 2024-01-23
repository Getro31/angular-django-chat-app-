
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
    })

export class UserService {
    users: any;

    constructor(
        private http: HttpClient
        ) { }

    registerUser(userData: any): Observable<any> {
        return this.http.post('http://127.0.0.1:8000/signup/', userData);
    }

    loginUser(userData: any): Observable<any> {
        return this.http.post('http://127.0.0.1:8000/api-auth/', userData);
    }

    getallUsers(tokenkey: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
            'Authorization': `Token ${tokenkey}`
            })
        };
        return this.http.get('http://127.0.0.1:8000/users/?format=json', httpOptions);
    }



    getCurrentUser(tokenkey: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Token ${tokenkey}`
            })
        };
        return this.http.get('http://127.0.0.1:8000/getcurrentuser/', httpOptions);
    }
}
