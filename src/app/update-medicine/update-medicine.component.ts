import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';


@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.scss']
})
export class UpdateMedicineComponent implements OnInit {
  id:number;
  medicine:Medicine = new Medicine(); 
  
 
  constructor(private medicineService:MedicineService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this method will bring data in display in update form text boxes
   this.id =this.route.snapshot.params['id'];   
   this.getMedicineDetails();
  }

  getMedicineDetails()
  {
    this.medicineService.showMedicineBasedOnID(this.id).subscribe(data =>{
    this.medicine = data;      
   });
  }


  showHomePage()
  {
    this.router.navigate(['']);
  }
  showAdminPage()
  {
    
    this.router.navigate(['admin']);
  }

  //Method to Update Medicine by passing id and the medicine record to be update as object
  updateMedicineIN()
  {
    console.log("Inside the update medice in .ts");
    this.medicineService.updateExistingMedicineService(this.id,this.medicine).subscribe(data=>{
    this.showAdminPage();
    });
    
  }
  
}
