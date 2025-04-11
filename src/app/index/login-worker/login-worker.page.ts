import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-worker',
  templateUrl: './login-worker.page.html',
  styleUrls: ['./login-worker.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginWorkerPage implements OnInit {
  showPassword = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  loginWorker() {
    this.router.navigate(['/worker']);
  }
}
