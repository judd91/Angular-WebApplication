import { Component, OnInit, Input } from '@angular/core';
import { DataHousesService } from '../services/data-houses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.css']
})
export class InfoCharacterComponent implements OnInit {
  url: string
  character: any
  isLoading: Boolean = false

  @Input() data: any;
  constructor(public dataService: DataHousesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true

    if(history.state.data != undefined ){
      this.character = history.state.data 
      this.dataService.saveItem2 = this.character['url']
      this.isLoading = false
    }
    if ( (history.state.data == undefined && this.dataService.saveItem != undefined) || (this.dataService.saveItem != undefined && this.dataService.saveItem2 != undefined) ){
      this.dataService.getElement(this.dataService.saveItem2).subscribe(item => { this.character = item; this.isLoading = false } ), 
      err => console.log(err)
    } 
  }

  returnToIndex(){
    this.router.navigate(["/"])
  }

  
}
