import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin'; 
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
admin:Admin = new Admin();
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  //Method for admin Login
 adminLogin()
  {
    return this.adminService.adminLoginService(this.admin).subscribe(data=>{
      this.showAdminPage();
    })
  }
    
   showHomePage()
   {
     this.router.navigate(['']);
   }  

   showAdminPage()
   {
    this.router.navigate(['admin']);
   }
}
