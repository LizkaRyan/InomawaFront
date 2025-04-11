import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {
  IonBadge,
  IonButton,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonSelect,
  IonSelectOption, IonTabBar, IonTabButton,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSelect, IonSelectOption, IonIcon, IonButton, IonTabBar, IonTabButton, IonBadge]
})
export class ReservationPage implements OnInit {
  filterValue: string = 'Tout';

  reservations = [
    {
      id: 1,
      serviceType: 'Réparation de plomberie',
      status: 'en progression',
      startTime: '08:30',
      time: '15:00',
      endTime: '11:00',
      date: '18 Dec, 2024',
      price: '5 000 Ar/h',
      location: 'Lot 85 Ter Isotsoika',
      image: 'assets/images/pipe-repair.jpg',
      client: {
        name: 'Marie RASOA',
        role: 'Propriétaire',
        avatar: 'assets/images/client1.jpg'
      }
    },
    {
      id: 2,
      serviceType: 'Réparation de robinets',
      status: 'en attente',
      date: '16 Dec, 2024',
      time: '15:00',
      price: '5 000 Ar/h',
      location: 'Lot ITB 59 Cité Itaosy',
      image: 'assets/images/faucet-repair.jpg',
      client: {
        name: 'Hery Falimanana',
        role: 'Gardien de maison',
        avatar: 'assets/images/client2.jpg'
      }
    },
    {
      id: 3,
      serviceType: 'Réparation fuite de plafond',
      status: 'confirmé',
      date: '14 Dec, 2024',
      time: '10:00',
      price: '15 000 Ar/h',
      location: 'Lot ITV 23 TER Ampasapito',
      image: 'assets/images/ceiling-leak.jpg',
      client: {
        name: 'LIOKA RAMARO',
        role: 'Propriétaire',
        avatar: 'assets/images/client3.jpg'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  callClient(client: any) {
    console.log('Calling client:', client.name);
    // Implement call functionality
  }

  messageClient(client: any) {
    console.log('Messaging client:', client.name);
    // Implement message functionality
  }

  ignoreReservation(id: number) {
    console.log('Ignoring reservation:', id);
    // Implement ignore functionality
  }

  finishReservation(id: number) {
    console.log('Finishing reservation:', id);
    // Implement finish functionality
  }
}
