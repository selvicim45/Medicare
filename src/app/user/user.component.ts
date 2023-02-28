import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  //create user Object
  user:User = new User();

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  userLogin()
  {
    return this.userService.userLoginService(this.user).subscribe(data=>{
      this.showUserPage();
    })
  }
    
   showHomePage()
   {
     this.router.navigate(['']);
   }  

   showUserPage()
   {
    this.router.navigate(['medicine']);
   }

   showMedicineComponent()
   {
     this.router.navigate(['medicine']);
   }
}
