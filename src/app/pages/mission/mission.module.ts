import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionRoutingModule } from './mission-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MissionRoutingModule, ComponentsModule],
})
export class MissionModule {}
