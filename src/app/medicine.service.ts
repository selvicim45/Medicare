import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
 id:number;
 name:String;
 pdesc:String;
 price:number;
 seller:String;
 medicine:Medicine;
 medicineSelected:String[]=[];
 private medicineURL="http://localhost:8080/api/v3/medicine";
 private splMedicineURL="http://localhost:8080/api/v3/medicine/selection";

  constructor(private httpClient:HttpClient) { }

  //Method to display all the medicines after admin login
  ViewAllMedicine():Observable<Medicine[]>
  {
     return this.httpClient.get<Medicine[]>(`${this.medicineURL}`)
  }

  //Method to Create New Medicine()
  createNewMedicineService(medicine:Medicine):Observable<Object>
  {
    return this.httpClient.post(`${this.medicineURL}`,medicine);   
   
  }

  //Method to delete Medicine by id
  deleteExistingMedicineService(id:number):Observable<Object>
  {
         return this.httpClient.delete(`${this.medicineURL}/${id}`);
  }

  //Method to update Medicine By sending Id
  updateExistingMedicineService(id:number,medicine:Medicine):Observable<Object>
  {
    console.log("Inside the update medice in service");
    return this.httpClient.put(`${this.medicineURL}/${id}`,medicine);
  }

  showMedicineBasedOnID(id:number):Observable<Medicine>
  {
    
    return this.httpClient.get<Medicine>(`${this.medicineURL}/${id}`);
  }

  //The getData and seData is to transfer data from one component to another with no parent child relationship
  getData()
 {  
   return this.medicineSelected;
 }
 setData(data)
 {    
    this.medicineSelected =data;
 }

 //To display data based on drop down list selection
 showFoodItensBasedOnDropDownSelectionService(selection:any):Observable<Medicine[]>
  {
     console.log("Selection inside service method",selection);
     
     return this.httpClient.get<Medicine[]>(`${this.splMedicineURL}/${selection}`);
  }

}

