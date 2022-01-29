import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm=this.fb.group({
    // public string UserName { get; set; }
    // public string Password{get;set;}
    // public string Email { get; set; }
    // public string FirstName { get; set; }
    // public string LastName { get; set; }


    FirstName:['',Validators.required],
    LastName:['',Validators.required],
    UserName:['',Validators.required],
    Password:['',Validators.required],
    Email:['',Validators.email],
    // address:new FormGroup({
    //   street:new FormControl(''),
    //   city:new FormControl(''),
    //   state:new FormControl('')
    // })

  })
  imageUrl:string="https://preview.redd.it/gwzyo6ffv1j71.jpg?width=640&crop=smart&auto=webp&s=82a9e329a9c93a53fd8e4b6aa1eadfed7b2f310c";
  value='3';
  constructor(private fb : FormBuilder) {

}

  ngOnInit(): void {
  }
  checkForm(){
    this.getFormValidationErrors(['UserName','Email'])
    console.log(this.registrationForm.value)//////value aici care fix forma de json pot sa o trimit direct la api cand adaug
  }

  getFormValidationErrors(keys: any){
    keys.forEach((key:any) => {
      const controlErrors=this.registrationForm.get(key)?.errors;
      if(controlErrors!==null) {
        console.error(controlErrors);
      }
    });
  }

}
