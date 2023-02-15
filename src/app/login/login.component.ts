import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
//  loginForm!:FormGroup;

 user:any={};
 constructor(private userservice:UserserviceService){}
 get email()
 {
   return this.loginForm.get('email')
 }
 get password()
 {
   return this.loginForm.get('password')
 }


  loginForm=new FormGroup(
    {
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),

    }
  )
  loginUser()
  {
     console.log(this.loginForm.value);
     this.user=Object.assign(this.loginUser,this.loginForm)
     this.addUser(this.user);
     this.loginForm.reset();
    

  }
  addUser(user:any)
  {

  }
  
}
