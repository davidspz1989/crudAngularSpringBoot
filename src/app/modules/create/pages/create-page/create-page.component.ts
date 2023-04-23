import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/class/person';
import { PersonService } from 'src/app/shared/service/person.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent {

  persons:Person;
  
  constructor(
    private readonly personService:PersonService,
    private router:Router){
    this.persons=new Person()
  }
  // PARA REALIZAR EL POST ES NECESARIO SUSCRIBIRSE 
  onSubmit(){
    this.personService.save(this.persons).subscribe({  // < -----
      next:(res)=>{
        console.log(res)
        this.goToPerson()        
      }
    })
  }

  goToPerson():void{
    this.router.navigate(['/listado'])
  }
}
