import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar, IonBadge,
  IonButton,
  IonContent, IonFooter,
  IonHeader,
  IonIcon, IonItem,
  IonSearchbar, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonIcon, IonAvatar, IonButton, IonBadge, IonFooter, IonTabs, IonTabBar, IonTabButton, IonSelect, IonSelectOption, IonItem]
})
export class ReservationPage implements OnInit {
  filterValue="";
  reservations = [
    {
      id: 1,
      status: 'en cours',
      statusClass: 'en-cours',
      title: 'Réparation plomberie',
      debut: '08:30',
      date: '16 Dec, 2024',
      fin: '11:00',
      price: '5 000 Ar/h',
      location: 'Lot 5 Ter Tsiatoska',
      technician: 'RAKOTO Salomon',
      technicianImage: "assets/images/avatar/rakoto-salomon.jpg",
      image: 'assets/images/issue/issue2.jpg'
    },
    {
      id: 2,
      status: 'attente',
      statusClass: 'attente',
      title: 'Tuyau cassé',
      date: '18 Dec, 2024',
      debut: '08:30',
      heure: '09:30',
      fin: '11:00',
      technician: 'RAKOTO SALOMON',
      technicianImage: "assets/images/avatar/rakoto-salomon.jpg",
      location: 'Lot 5 Ter Tsiatoska',
      price: '5 000 Ar/h',
      rating: 4.5,
      image: 'assets/images/issue/issue1.jpg'
    },
    {
      id: 3,
      status: 'terminé',
      statusClass: 'termine',
      title: 'Fuite d\'eau robinet',
      date: '21 Nov, 2024',
      heure: '10:19',
      fin: '11:00',
      debut: '08:30',
      technician: 'Détails',
      technicianImage: "assets/images/avatar/rakoto-salomon.jpg",
      rating: 4.5,
      price: '5 000 Ar/h',
      location: 'Lot 5 Ter Tsiatoska',
      hasMessages: true,
      messageCount: 2,
      rescheduleAvailable: true,
      image: 'assets/images/issue/issue-robinet.jpg'
    }
  ];

  reservationFiltered:any=this.reservations;

  constructor() {}

  ngOnInit(): void {

  }

  callTechnician(id: number) {
    console.log('Appeler technicien pour reservation', id);
  }

  messageTechnician(id: number) {
    console.log('Envoyer message pour reservation', id);
  }

  ignoreReservation(id: number, event: Event) {
    event.stopPropagation();
    console.log('Ignorer reservation', id);
  }

  reprendreRendezVous(id: number) {
    console.log('Reprendre rendez-vous pour', id);
  }

  filterReservations(filter: string) {
    console.log('Filtrer par:', filter);
  }

  filterList() {
    if (this.filterValue === 'Tout') {
      this.reservationFiltered = [...this.reservations];
    } else {
      this.reservationFiltered = this.reservations.filter(
        reservation => reservation.status === this.filterValue
      );
    }
  }
}
