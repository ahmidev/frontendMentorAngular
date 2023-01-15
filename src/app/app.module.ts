import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PickAddonsComponent } from './pick-addons/pick-addons.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { PersonnalInfoService } from './personnalInfo.service';
import { PlanService } from './plan.service';
import { ThankYouComponent } from './thankYou/thankYou.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    PickAddonsComponent,
    FinishingUpComponent,
      ThankYouComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonnalInfoService, PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
