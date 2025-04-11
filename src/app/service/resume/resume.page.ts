import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Router} from "@angular/router";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonIcon]
})
export class ResumePage implements OnInit {
  serviceRequest = {
    type: 'Tuyauterie et fuite',
    description: 'Fuites, coupure d\'eau, installation',
    date: '18 Dec, 2024',
    time: '09:30 am',
    price: '5 000 Ar/h',
    plumber: {
      name: 'Rakoto Salomon',
      rating: 4.5,
      image: 'assets/images/plumber-avatar.jpg'
    },
    address: 'Lot ITZ 46 Bemasoandro Itaosy',
    coupon: '',
    payment: {
      method: 'Airtel Money',
      details: '*** 4251'
    }
  };
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  editCoupon() {
    console.log('Edit coupon');
  }

  editPayment() {
    console.log('Edit payment method');
  }

  confirmReservation() {
    this.router.navigate(['/service/confirmation'])
  }

}
