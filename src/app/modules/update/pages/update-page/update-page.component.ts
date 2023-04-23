import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from 'src/app/class/person';
import { PersonService } from 'src/app/shared/service/person.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {

  id!:string
  person:Person={}

  constructor(
    private readonly route:ActivatedRoute,
    private readonly personService:PersonService){}


  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=params['id'],
        this.patchPerson(this.id,this.person)
        this.findById(this.id)
      }
    )
  }
  

  public findById(id:string):void{
    this.personService.findById(id).subscribe({
      next:(data)=>{
        this.person=data
      },
      error:(e)=>console.log(e)      
    });
  }

  public patchPerson(id:string, person:Person):void{
    this.personService.patchPerson(id, person).subscribe(p => {})
  }
}
