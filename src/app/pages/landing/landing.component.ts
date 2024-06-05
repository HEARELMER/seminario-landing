import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
 activeCard:boolean= false
  activeMenu:boolean = false
 toggleCard(){
  
  this.activeCard =! this.activeCard
 }
 toggleMenu(){
  // alert(this.activeMenu)
  this.activeMenu=!this.activeMenu
 }
}
