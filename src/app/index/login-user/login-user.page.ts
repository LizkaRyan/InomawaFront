import {Component, OnInit} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-login-user',
    templateUrl: './login-user.page.html',
    styleUrls: ['./login-user.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginUserPage implements OnInit {
    showPassword = false;

    constructor() {
    }

    ngOnInit() {
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    loginUser() {
        window.location.href = "";
    }
}
