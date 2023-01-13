import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PickAddonsComponent } from './pick-addons/pick-addons.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    PickAddonsComponent,
    FinishingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
