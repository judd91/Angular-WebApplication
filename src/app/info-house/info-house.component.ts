import { Component, OnInit } from '@angular/core';
import { DataHousesService } from '../services/data-houses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-info-house',
  templateUrl: './info-house.component.html',
  styleUrls: ['./info-house.component.css']
})

export class InfoHouseComponent implements OnInit {
  url: string
  element: any
  item: Character[]
  name: string
  isLoading: Boolean = false

  constructor(public dataService: DataHousesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true

  /** 
  * Routing management. Get info from history and save it in a global variable.
  * 
  */
    if (history.state.data != undefined) {
      this.element = history.state.data
      this.dataService.saveItem = this.element['url']
      this.isLoading = false
    }

    if ((history.state.data == undefined && this.dataService.saveItem != undefined) || (this.dataService.saveItem != undefined && this.dataService.saveItem2 != undefined)) {
      this.dataService.getElement(this.dataService.saveItem).subscribe(item => { this.element = item; this.isLoading = false },
        err => console.log(err))
    }
  }

  /** 
  * Routing to a selected character
  * @param url - url of the character
  * @param name - name of the character 
  */
  gotoMember(url: string, name: string) {
    this.dataService.getElement(url).subscribe(item => {
      this.item = item
      this.router.navigate(["house/" + name + "/character/" + item['name']], { state: { data: item } })
    },
      err => console.log(err))
  }

  returnToIndex() {
    this.router.navigate(["/"])
  }

}
