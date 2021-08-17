import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { EmplistComponent } from './emplist/emplist.component';
import { FetchApiComponent } from './fetch-api/fetch-api.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MeterComponent } from './gallery/meter/meter.component';
import { MoterComponent } from './gallery/moter/moter.component';
import { PumpComponent } from './gallery/pump/pump.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  //?child routing
  // {
  //   path: 'gallery',
  //   children: [
  //     { path: '', component: GalleryComponent },
  //     { path: 'pump', component: PumpComponent },
  //     { path: 'meter', component: MeterComponent },
  //     { path: 'moter', component: MoterComponent },
  //   ],
  // },

  //?nested routing
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      { path: 'pump', component: PumpComponent },
      { path: 'meter', component: MeterComponent },
      { path: 'moter', component: MoterComponent },
    ],
  },
  { path: 'binding', component: BindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'emplist', component: EmplistComponent },
  { path: 'empdata', component: EmpdataComponent },
  { path: 'fetchapi', component: FetchApiComponent },
  { path: 'tdf', component: TemplateDrivenFormsComponent },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
