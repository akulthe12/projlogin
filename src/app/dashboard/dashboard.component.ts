import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  users= localStorage.getItem('users');
  constructor(private userservice:UserserviceService){}
}
