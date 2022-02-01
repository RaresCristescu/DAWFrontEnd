import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {MustMatch} from "../../core/validator/must-match";
import {Router} from "@angular/router";
import {UserService} from "../../core/services/userService/user.service";
import {AuthenticateService} from "../../core/services/authenticateService/authenticate.service";
import {first} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm:FormGroup;
  loading=false;
  submitted=false;
  imageUrl:string="https://preview.redd.it/gwzyo6ffv1j71.jpg?width=640&crop=smart&auto=webp&s=82a9e329a9c93a53fd8e4b6aa1eadfed7b2f310c";
  value='3';
  constructor(private formBuilder : FormBuilder,
              private router: Router,
              private authenticationService: AuthenticateService,
              private userService: UserService)
  {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('Password', 'confirmPassword')
    });
  }

  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.registrationForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value, null, 4));
    this.loading = true;
    this.userService.register(this.registrationForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        });
  }

  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
  }

  // checkForm(){
  //   this.getFormValidationErrors(['UserName','Email'])
  //   console.log(this.registrationForm.value)//////value aici care fix forma de json pot sa o trimit direct la api cand adaug
  // }
  //
  // getFormValidationErrors(keys: any){
  //   keys.forEach((key:any) => {
  //     const controlErrors=this.registrationForm.get(key)?.errors;
  //     if(controlErrors!==null) {
  //       console.error(controlErrors);
  //     }
  //   });
  // }

}
