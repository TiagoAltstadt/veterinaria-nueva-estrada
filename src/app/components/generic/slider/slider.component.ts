import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @Input() sliderData: any;

  slider: KeenSliderInstance | undefined;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: {
        min: -5,
        max: 10,
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
  constructor() {}

  ngOnInit(): void {}
}
