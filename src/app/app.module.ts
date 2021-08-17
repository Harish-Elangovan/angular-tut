import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PumpComponent } from './gallery/pump/pump.component';
import { MeterComponent } from './gallery/meter/meter.component';
import { MoterComponent } from './gallery/moter/moter.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipeExamplePipe } from './pipe-example.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { UsetoinrPipe } from './CurrencyConvertor/usetoinr.pipe';
import { ArrRevercePipe } from './CurrencyConvertor/arr-reverce.pipe';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { EmpServiceService } from './Services/emp-service.service';
import { FetchApiComponent } from './fetch-api/fetch-api.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    PagenotfoundComponent,
    GalleryComponent,
    PumpComponent,
    MeterComponent,
    MoterComponent,
    BindingComponent,
    DirectivesComponent,
    PipeExamplePipe,
    PipeComponent,
    UsetoinrPipe,
    ArrRevercePipe,
    EmplistComponent,
    EmpdataComponent,
    FetchApiComponent,
    TemplateDrivenFormsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmpServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
