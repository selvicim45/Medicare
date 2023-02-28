import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  medicineInfo:Medicine[];
  medicine:Medicine = new Medicine();
  constructor(private medicineService:MedicineService,private router: Router) { }

  ngOnInit(): void {
    this.getAllMedicineFromDatabase();
  }

  getAllMedicineFromDatabase()
  {
    this.medicineService.ViewAllMedicine().subscribe(data => {this.medicineInfo=data;});
  } 

  deleteMedicne(id:number)
  {
    let ch=confirm("Are u sure you want to delete?")
    if (ch==true)
    {
    this.medicineService.deleteExistingMedicineService(id).subscribe(data =>{
      this.getAllMedicineFromDatabase();
    });   
  }
  }

  showHomePage()
  {
    this.router.navigate(['']);
  }  

  showAddNewMedicineComponent()
  {
    this.router.navigate(['newmedicine']);
  }

  showUpdateMedicine(id:number)
  {
    
    this.router.navigate(['updatemedicine',id]);
  }
  }

