import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',component:LandingComponent },
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent}
];
