import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthResponse} from '../models/auth-response';
import {AlertController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    basePath = 'http://localhost:8080/touristAgency/';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient, private router: Router, private alertController: AlertController) {
    }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` + `with message: ${error.error.message}`);
        }
        return throwError(error.status);
    }

    login(authRequest): Observable<AuthResponse> {
        return this.http
            .post<AuthResponse>(this.basePath + 'authenticate', {
                email: authRequest.email,
                password: authRequest.password
            }, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    register(registrationRequest): Observable<any> {
        return this.http
            .post<any>(this.basePath + 'user', {
                name: registrationRequest.name,
                surname: registrationRequest.surname,
                passportId: registrationRequest.passportId,
                email: registrationRequest.email,
                password: registrationRequest.password
            }, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/home']);
    }

}
