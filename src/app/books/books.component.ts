import { Component, OnInit } from '@angular/core';
import { DataHousesService } from '../services/data-houses.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  books: any
  book: any
  public show: boolean = false;
  public povshow: boolean = false;

  constructor(public dataService: DataHousesService) { }

  ngOnInit() {
    this.dataService.getBooks().subscribe(books => {
      this.books = books
    },
      err => console.log(err));
  }

  /** 
  * Show book
  * @param book object
  */
  sendBook(book: any) {
    this.povshow = false
    this.show = false
    this.book = book
  }

  /** 
  * Show/hide popovers 
  */
  showHideChar() {
    this.show = !this.show;
  }
  showHidepovChar() {
    this.povshow = !this.povshow;
  }
}
