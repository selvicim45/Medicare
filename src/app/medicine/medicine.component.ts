import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  medicineInfo:Medicine[];
  medicine:Medicine[];
  medicineSelected:String[]=[];
  
  checked:any='';
  selection:String;
  constructor(private medicineService: MedicineService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllMedicineFromDatabase();
    this.getAllMedicineFromDatabaseForDropDownBox();
  }

  getAllMedicineFromDatabaseForDropDownBox()
  {
    this.medicineService.ViewAllMedicine().subscribe(data => {this.medicine=data;});
  }
 
  getAllMedicineFromDatabase()
  {
    this.medicineService.ViewAllMedicine().subscribe(data => {this.medicineInfo=data;});
    console.log("data is"+ this.medicineInfo);
  } 
  showHomePage()
  {
    this.router.navigate(['']);
  }

  saveSelected(event:any)
    {
      this.checked = event.target.value;      
      console.log("The value selected in checkbox is ",this.checked);
      this.medicineSelected.push(this.checked);     
    }

    sender()
     {
      console.log("sending this to paymrny compinent", this.medicineSelected);
      this.medicineService.setData(this.medicineSelected);
      this.router.navigate(['confirmation']);
    }
     
    showMedicineSelectedFromDropDown(event:any) 
    {   
    this.selection= event.target.value;
    console.log("Selection is",this.selection);
    this.medicineService.showFoodItensBasedOnDropDownSelectionService(event.target.value).subscribe(data => {this.medicineInfo=data;});
     }

}
