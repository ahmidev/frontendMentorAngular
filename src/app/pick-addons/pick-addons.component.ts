import { Component } from '@angular/core';
import { Router,RouterModule,Routes} from '@angular/router';
import { PlanService } from '../plan.service';


@Component({
  selector: 'app-pick-addons',
  templateUrl: './pick-addons.component.html',
  styleUrls: ['./pick-addons.component.css']
})
export class PickAddonsComponent {
  constructor(private router: Router, private selectPlan :PlanService) {}

  public checkOnlineService: boolean = false;
  public checkLargerStorage: boolean = false;
  public checkCustomizableProfile: boolean = false;
  public addonsPrinceMonth: number = 0;
  public plan = this.selectPlan.plan;
 
  // price(){
  //   if(this.checkCustomizableProfile && this.plan){
  //     this.addonsPrinceMonth+=10;
  //   }
  //   if(this.checkLargerStorage && this.plan){
  //     this.addonsPrinceMonth+=10;
  //   }
  //   if(this.checkOnlineService && this.plan){
  //     this.addonsPrinceMonth+=10;
  //   }
  //   return this.addonsPrinceMonth
  // }
  selectAddons(){
    
    
    // console.log(this.checkOnlineService)
    // console.log(this.checkCustomizableProfile)
    // console.log(this.checkLargerStorage)
    
  }
  public nextStep() {
    if(this.checkOnlineService && this.plan){
      this.addonsPrinceMonth += 10;
      this.selectPlan.titleAddon1 = 'Online service';
    }else if(this.checkOnlineService){
      this.addonsPrinceMonth += 1;
      this.selectPlan.titleAddon1 = 'Online service';
    }
    if(this.checkLargerStorage && this.plan){
      this.addonsPrinceMonth += 20;
      this.selectPlan.titleAddon2 = 'Larger storage';
    }else if(this.checkLargerStorage){
      this.addonsPrinceMonth += 2;
      this.selectPlan.titleAddon2 = 'Larger storage';
    }
    
    if(this.checkCustomizableProfile && this.plan){
      this.addonsPrinceMonth += 20;
      this.selectPlan.titleAddon3 = 'Customizable profile';
    }else if(this.checkCustomizableProfile){
      this.addonsPrinceMonth += 2;
      this.selectPlan.titleAddon3 = 'Customizable profile';
    }
    console.log(this.addonsPrinceMonth)
    console.log(this.selectPlan.princeAddons)
    this.selectPlan.princeAddons = this.addonsPrinceMonth;
    this.selectPlan.prince += this.selectPlan.princeAddons;
     console.log(this.selectPlan.princeAddons)


    this.router.navigate(["summary"]);
    
   
    // this.router.navigateByUrl("select-plan");
  }
  public goBack() {
    
    this.router.navigate(["select-plan"]);
  
 
  // this.router.navigateByUrl("select-plan");
}
}
