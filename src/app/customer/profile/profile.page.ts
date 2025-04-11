import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent, IonFooter,
  IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTabBar, IonTabButton, IonTabs,
  IonTitle,
  IonToolbar,
  NavController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonList, IonItem, IonLabel, IonFooter, IonTabs, IonTabBar, IonTabButton]
})
export class ProfilePage implements OnInit {

  user = {
    name: 'Marie Rasoa',
    email: 'marie.rasoa@gmail.com',
    avatar: 'assets/images/profile-avatar.jpg',
    totalSpent: '30 000 Ar',
    rating: 4.6
  };

  menuItems = [
    {
      title: 'Statistiques',
      icon: 'stats-chart-outline',
      route: '/statistics'
    },
    {
      title: 'Paramètres&sécurité',
      icon: 'settings-outline',
      route: '/settings'
    },
    {
      title: 'Paiement options',
      icon: 'card-outline',
      route: '/payment'
    },
    {
      title: 'Adresse',
      icon: 'location-outline',
      route: '/address'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  goBack() {

  }

  navigateTo(route: string) {

  }

  logout() {
    // Implement logout logic
    console.log('Logging out...');
  }

  editProfile() {
  }

}
