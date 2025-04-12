import {Component, OnInit} from "@angular/core";
import {
  IonBadge,
  IonButton,
  IonContent,
  IonFooter,
  IonIcon, IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";
import {TabWorkerComponent} from "../../shared/tab-worker/tab-worker.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonBadge,
    IonButton,
    CommonModule,
    IonFooter,
    IonTabs,
    IonLabel,
    TabWorkerComponent
  ]
})
export class DashboardPage implements OnInit {
  plumber = {
    name: 'RAKOTO Salomon',
    location: 'A32 Betavoahangy Itaosy, Antananarivo',
    avatar: 'assets/images/avatar/rakoto-salomon.jpg',
    totalEarnings: '260 000 Ar',
    totalServices: 23,
    favoriteServices: 4,
    todayServices: 2
  };

  serviceRequests = [
    {
      type: 'Maintenant',
      location: 'Lot 95 Ter Isotsoaka',
      client: 'Marie RASOA',
      serviceType: 'Plombier',
      price: '12 500 Ar',
      clientAvatar: 'assets/images/avatar/marie-rasoa.jpg',
      image: 'assets/images/working.png'
    },
    {
      type: 'À 15:00',
      location: 'Lot ITB 59 Cité Itaosy',
      client: 'Hery Falimanana',
      serviceType: 'Vaporiste',
      price: '10 000 AR',
      clientAvatar: 'assets/images/avatar/Hery-rafalimanana.jpg',
      image: 'assets/images/index.png'
    }
  ];

  reviews = [
    {
      name: 'LIOKA RAMARO',
      rating: 5,
      comment: 'Bon travailleur, un bon gars. Il est sympa et finit bien ses services à temps.'
    },
    {
      name: 'Aimée RASOARIMALALA',
      rating: 5,
      comment: 'Il arrive bien à l\'heure tous le temps'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ignoreRequest(index: number) {
    console.log('Ignoring request', index);
    // Implement ignore logic
  }

  acceptRequest(index: number) {
    console.log('Accepting request', index);
    // Implement accept logic
  }

}
