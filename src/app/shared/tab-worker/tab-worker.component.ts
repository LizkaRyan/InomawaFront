import { Component, OnInit } from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab-worker',
  templateUrl: './tab-worker.component.html',
  styleUrls: ['./tab-worker.component.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  ]
})
export class TabWorkerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
