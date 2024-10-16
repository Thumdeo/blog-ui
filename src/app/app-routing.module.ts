import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BloggerComponent } from './blogger/blogger.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
   {path:"header", component:Headers},
   {path:"blogger",component:BloggerComponent},
   {path:"MatFormFieldModule",component:MatFormFieldModule},
   {path:"feed",component:FeedComponent},
   {path:"", component:HomeComponent},
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
