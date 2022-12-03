import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface MenuOptions {
  id: number;
  icon: any;
  label: string;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  menuOptions: MenuOptions[] = [
    {
      id: 1,
      icon: 'home-icon',
      label: 'Inicio',
    },
    {
      id: 2,
      icon: '',
      label: 'hola',
    },
    {
      id: 3,
      icon: '',
      label: 'hola',
    },
    {
      id: 4,
      icon: '',
      label: 'hola',
    },
  ];
  constructor() {}

  ngOnInit() {
    console.log(this.menuOptions);
    
  }
}
