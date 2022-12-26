import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface MenuOptions {
  id: number;
  icon: any;
  label: string;
  url: string;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  logo: string = 'assets/Images/Logos/rounded-logo.png';
  menuOptions: MenuOptions[] = [
    {
      id: 1,
      icon: 'home-icon',
      label: 'Inicio',
      url: '/',
    },
    {
      id: 2,
      icon: 'about-us',
      label: 'Nosotros',
      url: '/about-us',
    },
    {
      id: 3,
      icon: 'paw',
      label: 'Que hacemos',
      url: '/mission',
    },
    {
      id: 4,
      icon: 'at',
      label: 'Contactanos',
      url: '/contact',
    },
    // {
    //   id: 4,
    //   icon: 'user',
    //   label: 'Usuario',
    //   url: '/profile',
    // },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}
  optionClicked(url: string) {
    console.log(url);

    this.router.navigate(['/' + url]);
  }
}
