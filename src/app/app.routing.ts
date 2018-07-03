import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { TablesComponent } from './tables/tables.component';
import { EmailComponent} from './email/email.component';
import { UserlistComponent } from './userlist/userlist.component';
import{ UploadComponent } from './upload/upload.component';


const routes: Routes =[
    { path: 'table',          component: TablesComponent },
    { path: 'email',          component:  EmailComponent },
    { path: 'userlist' ,      component: UserlistComponent},
    { path: 'upload' ,        component: UploadComponent},
    { path: '',          redirectTo: 'userlist', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
