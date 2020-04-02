import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.page.html',
    styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;

    constructor(private authService: AuthService, private router: Router, public alertController: AlertController) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.authService.register(this.form).subscribe(
            data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.successfulRegistration();
                this.router.navigateByUrl('/home');
            },
            err => {
                if (err === 400) {
                    this.emptyFieldsError();
                }
                if (err === 500) {
                    this.sameEmailError();
                }
                console.log(err);
            }
        );
    }

    async successfulRegistration() {
        const alert = await this.alertController.create({
            header: 'Successful registration.',
            message: 'Your registration was successful.',
            buttons: ['Ok']
        });
        await alert.present();
    }


    async emptyFieldsError() {
        const alert = await this.alertController.create({
            header: 'Incorrect input',
            subHeader: 'Empty fields',
            message: 'All field should be filled.',
            buttons: ['Ok']
        });

        await alert.present();
    }

    async sameEmailError() {
        const alert = await this.alertController.create({
            header: 'Incorrect input',
            subHeader: 'Same email',
            message: 'A user with the same email address already exists.',
            buttons: ['Ok']
        });

        await alert.present();
    }

}
