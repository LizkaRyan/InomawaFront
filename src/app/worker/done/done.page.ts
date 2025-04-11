import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon, IonTabBar, IonTabButton, IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonFooter, IonTabs, IonTabBar, IonTabButton, IonBadge]
})
export class DonePage implements OnInit {

  taskInfo = {
    clientName: 'Marie Rasoa',
    duration: {
      hours: 2,
      minutes: 30
    },
    earnings: '12 500 Ar',
    rating: 4
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  confirm() {
    // Action à exécuter lors de la confirmation
    this.navCtrl.navigateRoot('/home');
  }

}
