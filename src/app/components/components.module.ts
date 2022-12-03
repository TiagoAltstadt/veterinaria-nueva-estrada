import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './generic/topbar/topbar.component';
import { MainContentComponent } from './home-components/main-content/main-content.component';
import { AboutUsComponent } from './about-us-components/main-content/about-us.component';

const components: any[] = [
  TopbarComponent,
  MainContentComponent,
  AboutUsComponent,
];
@NgModule({
  imports: [RouterModule],
  declarations: [...components],
  exports: [...components],
  providers: [],
})
export class ComponentsModule {
  constructor() {}
}
