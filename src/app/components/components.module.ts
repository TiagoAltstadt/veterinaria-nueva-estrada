import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './generic/topbar/topbar.component';
import { MainContentComponent } from './home-components/main-content/main-content.component';
import { AboutUsComponent } from './about-us-components/main-content/about-us.component';
import { SliderComponent } from './generic/slider/slider.component';
import { CommonModule } from '@angular/common';

const components: any[] = [
  TopbarComponent,
  MainContentComponent,
  AboutUsComponent,
  SliderComponent,
];
@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [...components],
  exports: [...components],
  providers: [],
})
export class ComponentsModule {
  constructor() {}
}
