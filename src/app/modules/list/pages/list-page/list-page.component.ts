import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/class/person';
import { PersonService } from 'src/app/shared/service/person.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit{

  persons:Person[]=[]
  alert!:boolean
  
  constructor(
    private readonly personService:PersonService,
    private readonly router:Router){}


  ngOnInit(): void {
    this.findAll()
  }

  public findAll():void{
    this.personService.findAll().subscribe(persons=>{
      this.persons=persons
    })
  }

  public goToUpdate(id:any):void{
    this.router.navigate(['/actualizar',`${id}`])
  }
  
  public changeAlert(alert:boolean):boolean{
    return this.alert=alert
  }

  public deletePerson(id:string):void{
    this.personService.deletePerson(id).subscribe({})
  }

}
