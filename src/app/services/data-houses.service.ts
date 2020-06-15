import { Injectable } from '@angular/core';
import { House } from '../models/house.model'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { Book } from '../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class DataHousesService {
  houses: Observable<any>
  housesPerPage: number
  currentPage: number
  // lastHouses: Observable<any>
  house: Observable<any>
  books: Observable<any>
  element: Observable<any>

  //for routing between houses and characters
  saveItem: any
  saveItem2: any

  constructor(private http: HttpClient, private router: Router) {}

  /** 
  * Get houses using http request and pagination
  * @param housesPerPage - selected houses to show per page
  * @param currentPage 
  * @returns Houses in one page. Minimun number 10, Maximun number 50  *
  */
  getHouses(housesPerPage: number, currentPage: number): Observable<House[]>{
    this.housesPerPage = housesPerPage
    this.currentPage = currentPage
    //query
    const query = `https://www.anapioficeandfire.com/api/houses?page=${currentPage}&pageSize=${housesPerPage}`
    this.houses = this.http.get(query)
    return this.houses
  }
  
  // Get elements of the last page of houses by writting the last url obtained from curl -i command (curl -I "https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10")
  // Not necessary now. getAllHouses is better 
  // getTotalHouses(): Observable<House[]>{
  //   const query = `https://www.anapioficeandfire.com/api/houses?page=45&pageSize=10`
  //   this.lastHouses = this.http.get(query)
  //   return this.lastHouses
  // }

  /** 
  * Get the information of a gived element (house or character)
  * @param url - url of the element
  * @returns information of the element ([])
  */
  getElement(url : string): Observable<any>{
    this.element = this.http.get(url)
    return this.element
  }
  
  /** 
  * Get the information of a books 
  * @returns All books
  */
  getBooks(): Observable<Book[]>{
    const query = `https://www.anapioficeandfire.com/api/books?page=1&pageSize=50`
    this.books = this.http.get(query)
    return this.books
  }
}
