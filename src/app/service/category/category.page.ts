import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import { FormsModule } from '@angular/forms';

interface Category {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CategoryPage implements OnInit {
  categories: Category[] = [
    { id: 1,name: 'Fuite de tuyau', image: 'pipe-leak.jpg' },
    { id: 1,name: 'Creuseur de puits', image: 'well-digger.jpg' },
    { id: 1,name: 'Porteur de bidons', image: 'water-carrier.jpg' },
    { id: 1,name: 'Nettoyeur de dalle', image: 'slab-cleaner.jpg' },
    { id: 1,name: 'Nettoyage de plage', image: 'beach-cleaning.jpg' },
    { id: 1,name: 'Transport d\'eau', image: 'water-transport.jpg' },
    { id: 1,name: 'Sanitaire', image: 'sanitary.jpg' },
    { id: 1,name: 'Plomberie', image: 'plumbing.jpg' },
    // Vous pouvez ajouter d'autres catégories si nécessaire
  ];

  categoriesFiltered: Category[] = this.categories;

  searchName="";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  askService(category: Category) {
    this.router.navigate(['/service/request'],{
      state: { category: category },
    });
  }

  filterList($event: any) {
    if(this.searchName===""){
      this.categoriesFiltered = [...this.categories];
    }
    else {
      this.categoriesFiltered = this.categories.filter(category => {
        return category.name.toLowerCase().toLowerCase().includes(this.searchName);
      })
    }
  }
}
