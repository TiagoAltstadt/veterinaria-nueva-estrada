import { Component, OnInit } from '@angular/core';

export interface SliderData {
  label: string;
  id: number;
  image: string;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  sliderData: SliderData[] = [
    {
      id: 1,
      label: 'Clinica Nueva Estrada',
      image: '../../../../assets/Images/misc/clinicaBanner.jpg',
    },
    {
      id: 2,
      label: 'Nuesto Consultorio',
      image: '../../../../assets/Images/misc/consultorio.jpg',
    },
    {
      id: 3,
      label: 'Un gato',
      image: '../../../../assets/Images/misc/gato.jpg',
    },
    {
      id: 3,
      label: 'Un perro',
      image: '../../../../assets/Images/misc/perro.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
