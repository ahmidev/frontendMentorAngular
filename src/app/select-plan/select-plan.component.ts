import { Component } from '@angular/core';
import { Router,RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PersonnalInfoService } from '../personnalInfo.service';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent {
  
  // public info: object[] = [];
  constructor(private router: Router,private fb: FormBuilder, public infos : PersonnalInfoService, private selectPlan :PlanService) {}
  // public cheeckPlan: FormGroup = this.fb.group({
    
  //   plan: [' '],
  // });
  // public cheeckPlan: FormGroup = new FormGroup({
  //   plan: new FormControl(true)
   
  // });
  
  public test: boolean = true;
  public buttonDisabled: boolean = false;
  public arcade: boolean = false;
  public advanced: boolean = false;
  public pro: boolean = false;
  public arcadePrinceMonth: number = 9;
  public advancedPrinceMonth: number = 12;
  public proPrinceMonth: number = 15;
  public arcadePrinceYearl: number = 90;
  public advancedPrinceYearl: number = 120;
  public proPrinceYearl: number = 150;

  selectArcade(){
    this.arcade =true;
    this.advanced = false;
    this.pro = false
    if(this.test){
      this.selectPlan.prince = this.arcadePrinceYearl;
      this.selectPlan.planType = 'Yearly';
      
    }else{
      this.selectPlan.prince = this.arcadePrinceMonth;
      this.selectPlan.planType = 'Monthy';
    }
    this.selectPlan.plan = this.test;
    this.selectPlan.title = 'Arcade';
    console.log(this.test)
    console.log(this.selectPlan.prince)
    console.log(this.selectPlan.plan)
    this.buttonDisabled = true;
  }
  selectAdvanced(){
    if(this.test){
      this.selectPlan.prince = this.advancedPrinceYearl;
      this.selectPlan.planType = 'Yearly';
    }else{
      this.selectPlan.prince = this.advancedPrinceMonth;
      this.selectPlan.planType = 'Monthy';
    }
    this.selectPlan.plan = this.test;
    this.selectPlan.title = 'Advanced';
    this.arcade =false;
    this.advanced = true;
    this.pro = false
    console.log(this.test)
    console.log(this.selectPlan.prince)
    console.log(this.selectPlan.plan)
    this.buttonDisabled = true;
  }
  selectPro(){
    if(this.test){
      this.selectPlan.prince = this.proPrinceYearl;
      this.selectPlan.planType = 'Yearly';
    }else{
      this.selectPlan.prince = this.proPrinceMonth;
      this.selectPlan.planType = 'Monthy';
    }
    this.selectPlan.plan = this.test;
    this.selectPlan.title = 'Pro';
    console.log(this.test)
    console.log(this.selectPlan.prince)
    console.log(this.selectPlan.plan)
    this.arcade =false;
    this.advanced = false;
    this.pro = true
    this.buttonDisabled = true;
  }


  public nextStep() {
  
      this.router.navigate(["pick-addons"]);
      // console.table(this.infos.infos)
      
      //  console.log(this.cheeckPlan.value)
    // this.router.navigateByUrl("select-plan");
  }
  public goBack() {
  
      this.router.navigate(["../"]);
    
    // this.router.navigateByUrl("select-plan");
  }
}
