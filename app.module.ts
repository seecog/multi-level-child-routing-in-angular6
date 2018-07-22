import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { MobileComponent } from './mobile/mobile.component';
import { ClothingComponent } from './clothing/clothing.component';
import{RouterModule}from '@angular/router';
import { ButtonModule } from '../../node_modules/primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';
import { EduComponent } from './edu/edu.component';
import { HealthComponent } from './health/health.component';


@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    DynamicFormComponent,
    CategoriesComponent,
    MobileComponent,
    ClothingComponent,
    HomeComponent,
    UserComponent,
    EduComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule.forRoot([
      { path: 'categories', component: CategoriesComponent,
      children:[
        {path:':id',component:MobileComponent},
        
      ]},
      {
        path: '', component: HomeComponent
      },
      {
        path: 'users', component: UsernameComponent,
        children: [
          { path: ':id', component: UserComponent,
        children:[
          {path:'edu',component:EduComponent},
          {
            path:'health',
            component:HealthComponent
          }
        ] }

        ]
      }
    ])



  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
