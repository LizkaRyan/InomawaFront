import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonButtons]
})
export class ConfirmationPage implements OnInit {

  confirmationData = {
    date: '18 Dec, 2024'
  };

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  goToReservationSection() {
    // Navigate to reservation section page
    console.log('Navigate to reservation section');
  }

  returnToHome() {
    // Navigate to home page
    this.router.navigate(['/service']);
  }

}
