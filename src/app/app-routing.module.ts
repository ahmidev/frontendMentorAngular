import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PickAddonsComponent } from './pick-addons/pick-addons.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { ThankYouComponent } from './thankYou/thankYou.component';

const routes: Routes = [
  {path:'',component:PersonalInfoComponent},
  {path:'select-plan', component:SelectPlanComponent},
  {path:'pick-addons', component:PickAddonsComponent},
  {path:'summary', component:FinishingUpComponent},
  {path:'app-thankYou', component:ThankYouComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
