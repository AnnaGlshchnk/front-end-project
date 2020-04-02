import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../services/token-storage.service';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    model: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService,
                private alertController: AlertController) {
    }

    ngOnInit() {
        this.authService.logout();
    }

    login() {
        this.model.action = 'login';
        this.authService.login(this.model)
            .subscribe(
                data => {
                    this.tokenStorage.saveToken(data);

                    this.isLoginFailed = false;
                    this.isLoggedIn = true;
                    this.router.navigateByUrl('/tours');
                },
                err => {
                    this.incorrectCredentialsError();
                    this.errorMessage = err.error.message;
                    this.isLoginFailed = true;
                }
            );
    }

    async incorrectCredentialsError() {
        const alert = await this.alertController.create({
            header: 'Incorrect credentials',
            message: 'Invalid email or password',
            buttons: ['Ok']
        });

        await alert.present();
    }

}
