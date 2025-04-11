import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent, IonFooter,
  IonHeader,
  IonIcon, IonItem, IonLabel,
  IonList, IonTabBar, IonTabButton, IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonList, IonItem, IonLabel, IonFooter, IonTabs, IonTabBar, IonTabButton, IonBadge]
})
export class ProfilePage implements OnInit {

  provider = {
    name: 'RAKOTO Salomon',
    avatar: 'assets/images/provider-avatar.jpg',
    totalEarnings: '260000 Ar',
    totalServices: '23',
    rating: 4.5,
    hourlyRate: '5 000 Ar/h'
  };

  menuItems = [
    {
      title: 'Profil public',
      icon: 'globe-outline',
      route: '/public-profile'
    },
    {
      title: 'Photo des travaux réalisés',
      icon: 'images-outline',
      route: '/work-photos'
    },
    {
      title: 'Statistique',
      icon: 'stats-chart-outline',
      route: '/statistics'
    },
    {
      title: 'Options',
      icon: 'settings-outline',
      route: '/options'
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  navigateTo(route: string) {
    this.navCtrl.navigateForward(route);
  }

  logout() {
    // Implement logout logic
    console.log('Logging out...');
    this.navCtrl.navigateRoot('/login');
  }

  editProfile() {
    this.navCtrl.navigateForward('/edit-profile');
  }

}
