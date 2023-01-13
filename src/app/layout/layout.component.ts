import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/Auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private authservice:AuthService , private router : Router) { }

  ngOnInit(): void {
  }
  logout():void{
  //type de retour promise donc .then
  this.authservice.doLogout().finally(()=>this.router.navigate(['/login']))
}
}
