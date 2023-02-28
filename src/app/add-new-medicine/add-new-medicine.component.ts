import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-add-new-medicine',
  templateUrl: './add-new-medicine.component.html',
  styleUrls: ['./add-new-medicine.component.scss']
})
export class AddNewMedicineComponent implements OnInit {
  medicine:Medicine = new Medicine();
  constructor(private medicineService:MedicineService,private router:Router) { }

  ngOnInit(): void {
  }




  showHomePage()
  {
    this.router.navigate(['']);
  }  

  showAdminComponent(){
    this.router.navigate(['admin']);
  }

  CreateNewMedicine()
  {
    this.medicineService.createNewMedicineService(this.medicine).subscribe(data=>{
    this.showAllMedicine();
    });  
  }

  showAllMedicine()
  {
       this.router.navigate(['admin']);
  }

}
