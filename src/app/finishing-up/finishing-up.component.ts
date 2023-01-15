import { Component } from '@angular/core';
import { Router,RouterModule,Routes} from '@angular/router';
import { PlanService } from '../plan.service';
@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.css']
})
export class FinishingUpComponent {
  constructor(private router: Router, public plan: PlanService) {}

  public planType = this.plan.planType;
  public lien = 'Change';
  change(){
    this.router.navigate(["select-plan"]);
  }
  public nextStep() {
  
      this.router.navigate(["app-thankYou"]);
    console.log(this.plan)
   
    // this.router.navigateByUrl("select-plan");
  }
  public goBack() {
    this.plan.princeAddons = 0;
    
    this.plan.titleAddon3 = '';
    this.plan.titleAddon2 = '';
    this.plan.titleAddon1 = '';
    this.router.navigate(["pick-addons"]);
  
 
  // this.router.navigateByUrl("select-plan");
}
}
