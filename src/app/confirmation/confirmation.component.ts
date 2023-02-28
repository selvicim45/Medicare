import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  medicineSelected:String[]=[];
  constructor(private medicineService:MedicineService,private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  showHomePage()
  {
    this.router.navigate(['medicine']);
  }

  showPayment()
  {
    this.router.navigate(['payment']);
  }
  getData()
  {
    console.log("I am called");  
    this.medicineSelected = this.medicineService.getData();
    console.log("List of food Selected in the get area,",this.medicineSelected);
  }
}
