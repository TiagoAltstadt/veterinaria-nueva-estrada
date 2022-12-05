import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './generic/topbar/topbar.component';
import { MainContentComponent } from './home/main/main-content.component';
import { AboutUsComponent } from './about-us/main-content/about-us.component';
import { SliderComponent } from './generic/slider/slider.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MissionComponent } from './mission/mission.component';
import { ContactComponent } from './contact/contact.component';

const components: any[] = [
  TopbarComponent,
  MainContentComponent,
  ProfileComponent,
  AboutUsComponent,
  SliderComponent,
];
@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [...components, AboutUsComponent, MissionComponent, ContactComponent],
  exports: [...components],
  providers: [],
})
export class ComponentsModule {
  constructor() {}
}
