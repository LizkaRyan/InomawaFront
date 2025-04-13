import {Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonIcon, IonInput, IonLabel, IonModal, IonTextarea,
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
  timeOutline, chevronBackOutline, chevronForwardOutline
} from 'ionicons/icons';
import {TabCustomerComponent} from "../../shared/tab-customer/tab-customer.component"; // Import des icônes

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonButtons, IonIcon, IonFooter, IonTextarea, IonInput, TabCustomerComponent, IonModal, IonLabel]
})
export class RequestPage implements OnInit {
  @ViewChild('calendarModal') calendarModal!: IonModal;

  problemDescription: string = '';
  selectedTime: string = '';
  selectedPhotos: string[] = [
    'assets/images/issue/issue1.jpg',
    'assets/images/issue/issue2.jpg'
  ]; // Photos pré-chargées comme exemple

  category={
    name: "",
    image: ""
  }

  selectedDate: Date = new Date();
  currentDate: Date = new Date();
  weekdays: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  previousMonthDays: number[] = [];
  currentMonthDays: number[] = [];
  nextMonthDays: number[] = [];

  get currentMonthYear(): string {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return this.currentDate.toLocaleDateString('fr-FR', options);
  }

  constructor(private router: Router,private location:Location) {
    this.generateCalendarDays();
    addIcons({
      chevronBackOutline,
      chevronForwardOutline,
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
    // this.selectedDate = this.formatDate(now);
    this.selectedTime = this.formatTime(now);
    this.category = history.state.category;
  }

  openCalendar() {
    this.calendarModal.present();
  }

  closeCalendar() {
    this.calendarModal.dismiss();
  }

  previousMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.generateCalendarDays();
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.generateCalendarDays();
  }

  generateCalendarDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    // Premier jour du mois
    const firstDay = new Date(year, month, 1);
    // Dernier jour du mois
    const lastDay = new Date(year, month + 1, 0);

    // Nombre de jours dans le mois
    const daysInMonth = lastDay.getDate();

    // Jour de la semaine du premier jour (0 = dimanche, 1 = lundi, etc.)
    let firstDayOfWeek = firstDay.getDay();
    // Convertir pour commencer par lundi (0 = lundi, 6 = dimanche)
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    // Jours du mois précédent à afficher
    this.previousMonthDays = [];
    if (firstDayOfWeek > 0) {
      const prevMonth = new Date(year, month, 0);
      const prevMonthDays = prevMonth.getDate();

      for (let i = prevMonthDays - firstDayOfWeek + 1; i <= prevMonthDays; i++) {
        this.previousMonthDays.push(i);
      }
    }

    // Jours du mois courant
    this.currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // Jours du mois suivant à afficher
    const totalDaysDisplayed = this.previousMonthDays.length + this.currentMonthDays.length;
    const nextMonthDaysToShow = 42 - totalDaysDisplayed; // 6 semaines x 7 jours = 42

    this.nextMonthDays = Array.from({ length: nextMonthDaysToShow }, (_, i) => i + 1);
  }

  isSelectedDay(day: number): boolean {
    if (this.selectedDate.getFullYear() !== this.currentDate.getFullYear()) return false;
    if (this.selectedDate.getMonth() !== this.currentDate.getMonth()) return false;
    return this.selectedDate.getDate() === day;
  }

  selectDay(day: number) {
    this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    this.closeCalendar();
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR');
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
