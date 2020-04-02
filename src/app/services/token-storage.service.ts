import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor() {
    }

    public saveToken(response) {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.setItem(TOKEN_KEY, JSON.stringify(response));
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }
}
