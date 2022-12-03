import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

export interface SliderData {
  label: string;
  id: number;
  image: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement> | any;

  sliderData: SliderData[] = [
    { id: 1, label: 'Clinica Nueva Estrada', image: '../../../../assets/Images/misc/clinicaBanner.jpg' },
    { id: 2, label: 'Nuesto Consultorio', image: '../../../../assets/Images/misc/consultorio.jpg' },
    { id: 3, label: 'Un gato', image: '../../../../assets/Images/misc/gato.jpg' },
    { id: 3, label: 'Un perro', image: '../../../../assets/Images/misc/perro.jpg' },
  ];

  slider: KeenSliderInstance | undefined;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: {
        perView: 2,
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
  constructor() {}

  ngOnInit(): void {}
}
