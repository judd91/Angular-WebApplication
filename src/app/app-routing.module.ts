import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseCardsComponent } from './house-cards/house-cards.component';
import { InfoHouseComponent } from './info-house/info-house.component';
import { BooksComponent } from './books/books.component';
import { InfoCharacterComponent } from './info-character/info-character.component';
import { LoadeddataGuard } from './guards/loadeddata.guard';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: "", 
    component: HouseCardsComponent
  },
  {
    path: "house/:id/character/:id",
    component: InfoCharacterComponent,
    canActivate: [LoadeddataGuard]
  },
  {
    path: "books",
    component: BooksComponent
  },
  {
    path: "house/:id",
    component: InfoHouseComponent,
    canActivate: [LoadeddataGuard]
  },
  { path: '404',
    component: NotFoundComponent 
  },
    { path: '**', 
    redirectTo: '404' 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoadeddataGuard]
})
export class AppRoutingModule { 


}
