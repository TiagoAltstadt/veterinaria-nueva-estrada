import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../pages/home/home-page.component';

const components: any[] = [HomePageComponent];
@NgModule({
  imports: [RouterModule],
  declarations: [...components],
  exports: [...components],
  providers: [],
})
export class ComponentsModule {
  constructor() {}
}
