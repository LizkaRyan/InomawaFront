import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonIcon, IonInput, IonTextarea,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import { addIcons } from 'ionicons'; // Import ajouté
import {
  arrowBackOutline,
  calendarOutline,
  star,
  locationOutline,
  pricetagOutline,
  cardOutline,
  documentTextOutline,
  createOutline,
  menu,
  home,
  arrowForward,
  chatbubbleOutline,
  add,
  closeCircle,
  timeOutline
} from 'ionicons/icons';
import {TabCustomerComponent} from "../../shared/tab-customer/tab-customer.component"; // Import des icônes

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
  standalone: true,
  imports: [IonContent, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonIcon, IonFooter, IonTextarea, IonInput, TabCustomerComponent]
})
export class RequestPage implements OnInit {
  problemDescription: string = '';
  selectedDate: string = '';
  selectedTime: string = '';
  selectedPhotos: string[] = [
    'assets/images/issue/issue1.jpg',
    'assets/images/issue/issue2.jpg'
  ]; // Photos pré-chargées comme exemple

  category={
    name: "",
    image: ""
  }

  constructor(private router: Router,private location:Location) {
    addIcons({
      arrowBackOutline,
      calendarOutline,
      star,
      locationOutline,
      pricetagOutline,
      cardOutline,
      documentTextOutline,
      createOutline,
      chatbubbleOutline,
      menu,
      home,
      arrowForward,
      add,
      closeCircle,
      timeOutline
    });
  }

  ngOnInit() {
    // Initialiser avec la date et l'heure actuelle
    const now = new Date();
    this.selectedDate = this.formatDate(now);
    this.selectedTime = this.formatTime(now);
    this.category = history.state.category;
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  formatTime(date: Date): string {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // l'heure '0' devrait être '12'
    return `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  }

  async addPhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt
      });

      if (image.webPath) {
        this.selectedPhotos.push(image.webPath);
      }
    } catch (error) {
      console.error('Erreur lors de la prise de photo', error);
    }
  }

  removePhoto(index: number) {
    this.selectedPhotos.splice(index, 1);
  }

  searchWorker() {
    // Navigation vers la page de recherche de travailleurs
    // Vous pouvez également passer les données collectées comme paramètres
    this.router.navigate(['/service/worker'], {
      state: {
        description: this.problemDescription,
        date: this.selectedDate,
        time: this.selectedTime,
        photos: this.selectedPhotos,
        category:this.category
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
