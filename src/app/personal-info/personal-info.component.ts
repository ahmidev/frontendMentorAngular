import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router,RouterModule,Routes} from '@angular/router';
import {  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators } from "@angular/forms";
  import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonnalInfoService } from '../personnalInfo.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  // get name(){
  //   return this.form.get('name');
  // }
  
  // constructor(private router: Router,) {
   
  // }
  public form: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.email, Validators.required]),
    phone: new FormControl("", [Validators.minLength(10),Validators.maxLength(10), Validators.required])
  });

 
  // public subscription: Subscription = new Subscription();
  // public erreursForm: { [field: string]: string } = {
  //   name: "",
  //   email: "",
  //   confirmEmail: "",
  //   form: ""
  // };
  
  // public messagesErreur: { [field: string]: { [field: string]: string } } = {
  //   name: {
  //     required: "Ce champ est requis.",
  //     minlength: "Vos nom et prénom doivent faire au moins 4 caractères."
  //   },
  //   email: {
  //     required: "Entrez un email.",
  //     email: "Rentrez une adresse email valide.",
  //     asyncEmailValidator: "L'email n'existe pas."
  //   },
  //   confirmEmail: {
  //     email: "Rentrez une adresse email valide."
  //   },
  //   form: {
  //     noMatch: "Les emails ne correspondent pas."
  //   }
    
  // };
  constructor(private router: Router,  public infoPerso : PersonnalInfoService ) {}

  
 
  ngOnInit() {
    // this.subscription.add(
    //   this.form.statusChanges.subscribe(() => {
    //     this.changementStatusForm();
    //   })
    // );
  }
  // changementStatusForm() {
  //   if (!this.form) {
  //     return;
  //   }
   
  //   const form = this.form;
  //   for (const field in this.erreursForm) {
  //     this.erreursForm[field] = '';
  //     let control: AbstractControl;
  //     if (
  //       field === 'form' &&
  //       form.get('email')!.touched &&
  //       form.get('confirmEmail')!.dirty
  //     ) {
  //       control = form;
  //     } else {
  //       control = form.get(field)!;
  //     }
  //     if (control && control.touched && control.invalid) {
  //       const messages = this.messagesErreur[field];
  //       for (const key in control.errors) {
  //         this.erreursForm[field] += messages[key] + ' ';
  //       }
  //     }
  //   }
  // }
  
  public nextStep() {
  
      this.router.navigate(["select-plan"]);
    
   
    // this.router.navigateByUrl("select-plan");
  }
  submit() {
    // console.log(this.infoPerso);
    // console.log(this.form);
    // console.log(this.form.value.name);
    // if(this.form.valid){
    //   this.nextStep() 
    // }
    this.nextStep()
   this.infoPerso.infos.push(this.form.value.name);
   this.infoPerso.infos.push(this.form.value.email);
   this.infoPerso.infos.push(this.form.value.phone);
  //  console.log(this.infos)
   
  }
}
