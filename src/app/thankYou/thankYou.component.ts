import { Component, OnInit } from '@angular/core';
import { Router,RouterModule,Routes} from '@angular/router';
import { PersonnalInfoService } from '../personnalInfo.service';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-thankYou',
  templateUrl: './thankYou.component.html',
  styleUrls: ['./thankYou.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(public infos:PersonnalInfoService, public plans : PlanService) { }

  public name = this.infos.infos[0];
  public email = this.infos.infos[1];
  public phone = this.infos.infos[2];
  public plan = this.plans;

  ngOnInit() {
  }

}
