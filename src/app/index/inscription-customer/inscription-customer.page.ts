import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonInput,
  IonItem, IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription-customer',
  templateUrl: './inscription-customer.page.html',
  styleUrls: ['./inscription-customer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonButtons, IonBackButton, IonItem, IonLabel, IonInput, IonButton]
})
export class InscriptionCustomerPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this.router.navigate(['/login/user']);
  }

  goToLogin() {
    this.router.navigate(['/login/user']);
  }

}
