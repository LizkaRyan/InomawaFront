import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

interface Worker {
  id: number;
  name: string;
  image: string;
  skills: string[];
  rating: number;
  price: string;
}

@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
  standalone: true,
  imports: [IonContent, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonFooter]
})
export class WorkerPage implements OnInit {
  workers: Worker[] = [
    {
      id: 1,
      name: 'Rakoto Salomon',
      image: 'assets/images/workers/worker1.jpg',
      skills: ['tuyauterie', 'plomberie', 'sanitaire', 'fuite d\'eau'],
      rating: 4.5,
      price: '5 000'
    },
    {
      id: 2,
      name: 'Razanany Mirana',
      image: 'assets/images/workers/worker2.jpg',
      skills: ['puits', 'porte-bidons', 'nettoyage', ''],
      rating: 5,
      price: '1 000'
    },
    {
      id: 3,
      name: 'Morafeno Chrisolin',
      image: 'assets/images/workers/worker3.jpg',
      skills: ['transport d\'eau', 'porte-bidons', '', ''],
      rating: 3.5,
      price: '1 200'
    },
    {
      id: 4,
      name: 'Nanahary Tovomanana',
      image: 'assets/images/workers/worker4.jpg',
      skills: ['nettoyeur', 'porte-bidons', 'puits', ''],
      rating: 4.5,
      price: '800'
    },
    {
      id: 5,
      name: 'Christine Natalie',
      image: 'assets/images/workers/worker5.jpg',
      skills: ['nettoyage', 'lessive', '', ''],
      rating: 3.5,
      price: '5 000'
    }
  ];


  constructor() { }

  ngOnInit() {
    // // Vous pouvez récupérer les données du problème si nécessaire
    // const navigation = this.router.getCurrentNavigation();
    // if (navigation?.extras.state) {
    //   const problemData = navigation.extras.state;
    //   console.log('Données du problème reçues:', problemData);
    //   // Ici vous pourriez filtrer les travailleurs en fonction des données du problème
    // }
  }

  reserveWorker(worker: any) {
    console.log('Réservation du travailleur:', worker);
    // Implémentez la logique de réservation ici
    // Par exemple, naviguer vers une page de confirmation
    // this.router.navigate(['/reservation-confirmation'], {
    //   state: { worker }
    // });
  }
}
