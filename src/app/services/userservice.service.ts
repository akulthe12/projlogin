import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  addUser(user:any)
  {
    let users=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users')!);
      users=[users,...users];

    }
    else
    {
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(user))
  }
}


