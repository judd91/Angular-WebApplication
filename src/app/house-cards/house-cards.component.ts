import { Component, OnInit } from '@angular/core';
import { House } from '../models/house.model.js';
import { DataHousesService } from '../services/data-houses.service.js';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-cards',
  templateUrl: './house-cards.component.html',
  styleUrls: ['./house-cards.component.css']
})
export class HouseCardsComponent implements OnInit {
  lastHouses: any
  houses: any
  totalHouses = 0
  housesPerPage = 10
  currentPage = 1
  pageSizeOptions = [10, 20, 50]
  isLoading: Boolean = false
  house: House
  url: string
  item: any

  //Get all houses
  currentPage_All: number = 1
  housesPerPage_All: number = 50
  Allhouses: any
  housesCollect: any

  constructor(public dataService: DataHousesService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true //spinning

    this.dataService.getHouses(this.housesPerPage, this.currentPage).subscribe(houses => {
      this.houses = houses
      this.isLoading = false
    },
      err => console.log(err));

    // Get total houses from the result of the lastpage of houses
    // this.dataService.getTotalHouses().subscribe(lastHouses => {
    //   this.lastHouses = lastHouses
    //   this.lastHouses.forEach(item => { ++this.totalHouses })
    //   this.totalHouses = this.totalHouses + (44 * 10) // from curl -i command we know the max number of pages (45 - last one) for 10 elements per page 
    //   this.pageSizeOptions = [10, 20, 50, this.totalHouses]
    //   return this.totalHouses
    // });

    this.getAllHouses()
  }

  /** 
  * Get/show houses by pagination depending on the selected number of houses to show in a page
  * @param pageData - event with the selected number of houses
  */
  onChangedPage(pageData: PageEvent) {
    if (pageData.pageSize == this.totalHouses) {
      this.showAllHouses()
    } else {
      this.currentPage = pageData.pageIndex + 1;
      this.housesPerPage = pageData.pageSize;
      this.isLoading = true
      this.dataService.getHouses(this.housesPerPage, this.currentPage).subscribe(houses => {
        this.houses = houses
        this.isLoading = false
      },
        err => console.log(err));
    }
  }

  /** 
  * Show the maximun number of houses
  * 
  */
  showAllHouses() {
    this.houses = this.Allhouses
    this.currentPage_All = 1
  }

  /** 
  * Get an object with all houses making http requests and concatenating responses
  * 
  */
  getAllHouses() {
    this.dataService.getHouses(this.housesPerPage_All, this.currentPage_All).subscribe(houses => {
      if (this.currentPage_All == 1) {
        this.housesCollect = houses
        ++this.currentPage_All
        this.getAllHouses()
      }
      else {
        if (houses.length == 50) {
          this.housesCollect = this.housesCollect.concat(houses)
          ++this.currentPage_All;
          this.getAllHouses()
        } else {
          this.housesCollect = this.housesCollect.concat(houses)
          this.Allhouses = this.housesCollect
          this.totalHouses = this.Allhouses.length
          this.pageSizeOptions = [10, 20, 50, this.totalHouses]
        }
      }
    },
      err => console.log(err))
  }

  /** 
  * Show information of one house
  * @param house 
  */
  showInfoHouse(house: House) {
    this.house = house
  }

  /** 
  * Routing to an infomation house page
  * @param url - url to house page
  */
  sendUrl(url: string) {
    this.url = url
    this.dataService.getElement(url).subscribe(item => {
      this.item = item
      this.router.navigate(["house/" + item['name']], { state: { data: item } })
    },
      err => console.log(err))

  }

  /** 
  * Search by houses
  * @param searchtext 
  */
  onSearch(searchtext: string) {
    this.isLoading = true
    if (searchtext.length == 0) {
      this.dataService.getHouses(this.housesPerPage, this.currentPage).subscribe(houses => {
        this.houses = houses
        this.isLoading = false
      },
        err => console.log(err));
    }
    else {
      this.houses = this.Allhouses.filter(res => {
        this.isLoading = false

        return ((res.name).toLowerCase().indexOf(searchtext.toLowerCase()) >= 0)
      });
    }
    console.log(this.houses)
  }
}
