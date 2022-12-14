import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './generic/topbar/topbar.component';
import { MainContentComponent } from './home//main-content.component';
import { AboutUsComponent } from './about-us//about-us.component';
import { SliderComponent } from './generic/slider/slider.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { MissionComponent } from './mission/mission.component';
import { ContactComponent } from './contact/contact.component';
import { BadgeComponent } from './generic/badge/badge.component';
import { WorkInProgressComponent } from './generic/work-in-progress/work-in-progress.component';
import { NewBadgeComponent } from './generic/new-badge/new-badge.component';
import { FormsModule } from '@angular/forms';

const components: any[] = [
  TopbarComponent,
  MainContentComponent,
  ProfileComponent,
  AboutUsComponent,
  SliderComponent,
  AboutUsComponent,
  MissionComponent,
  ContactComponent,
  BadgeComponent,
  WorkInProgressComponent,
];
const modules: any[] = [RouterModule, CommonModule, FormsModule];
@NgModule({
  imports: [...modules],
  declarations: [...components, NewBadgeComponent],
  exports: [...components],
  providers: [],
})
export class ComponentsModule {
  constructor() {}
}
