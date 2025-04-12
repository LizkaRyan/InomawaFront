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
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  checkmark,
  star,
  starOutline,
  homeOutline,
  documentTextOutline,
  chatbubbleOutline
} from 'ionicons/icons';
import {TabCustomerComponent} from "../../shared/tab-customer/tab-customer.component";

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonFooter, IonTabs, IonTabBar, IonTabButton, IonBadge, TabCustomerComponent]
})
export class DonePage implements OnInit {

  taskInfo = {
    workerName: 'Salomon',
    cost: '12 500 Ar',
    duration: {
      hours: 2,
      minutes: 30
    },
    rating: 4
  };

  constructor(private navCtrl: NavController) {
    addIcons({
      arrowBackOutline,    // Icône flèche retour
      checkmark,          // Icône de validation (coche verte)
      star,               // Icône étoile pleine (notation)
      starOutline,        // Icône étoile vide (notation)
      homeOutline,        // Icône accueil (footer)
      documentTextOutline, // Icône documents (footer)
      chatbubbleOutline   // Icône chat (footer)
    });
  }

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
