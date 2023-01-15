import { Component } from '@angular/core';
import { Router,RouterModule,Routes} from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) {}

  public redirection() {
  
      this.router.navigate(["select-plan"]);
    
   
    // this.router.navigateByUrl("select-plan");
  }
}
