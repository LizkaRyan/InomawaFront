import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/angular/standalone";
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.page.html',
  styleUrls: ['./worker-profile.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonTitle,
    IonContent
  ]
})
export class WorkerProfilePage implements OnInit {
  plumber = {
    name: 'Rakoto Salomon',
    rate: '5 000 Ar/h',
    description: 'Expert en plomberie et en tuyauterie. Salomon répare rapidement les fuites d\'eau et installe vos équipements avec précision. Disponible 24/7, il garantit un service fiable et efficace pour éviter tout dégât des eaux !',
    completedJobs: 23,
    rating: 4.5,
    projects: [
      {
        image: 'assets/images/bathroom.jpg',
      },
      {
        image: 'assets/images/kitchen.jpg',
      },
      {
        image: 'assets/images/pipes.jpg',
      }
    ],
    reviews: [
      {
        name: 'LIOKA RAMARO',
        rating: 5,
        comment: 'Bon travailleur, un bon gars. Il est sympa et finit bien ses services à temps.'
      },
      {
        name: 'Ernestine ELISA',
        rating: 4,
        comment: 'Il nous a beaucoup aidé depuis longtemps. À chaque souci en cuisine, ou avec la plomberie, c\'est l\'homme de main idéal. Il fait très bon travail pour un prix très abordable.'
      }
    ],
  };

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  shareProfile() {
    console.log('Share profile');
  }

  sendMessage() {
    console.log('Send message');
  }

  makeReservation() {
    console.log('Make reservation');
  }

}
