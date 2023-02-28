import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  

  showUserLogin()
  {
    console.log("clicked"); 
    this.router.navigate(['user']);
  }  

  //Show Admin Login component
  showAdminLogin()
  {
    this.router.navigate(['adminlogin']);
  }

  //Show User Register Component
  showUserRegister()
  {
    this.router.navigate(['register']);
  }

}
