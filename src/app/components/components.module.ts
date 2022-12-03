import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './generic/topbar/topbar.component';
import { MainContentComponent } from './home-components/main-content/main-content.component';

const components: any[] = [
  TopbarComponent,
  MainContentComponent,
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
