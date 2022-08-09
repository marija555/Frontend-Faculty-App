
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }

  home(){
    this.router.navigate(['home']);
   }
   autor(){
    this.router.navigate(['autor']);
   }
   about(){
    this.router.navigate(['about']);
   }
   status(){
    this.router.navigate(['status']);
   }
   fakultet(){
    this.router.navigate(['fakultet']);
   }
   departman(){
    this.router.navigate(['departman']);
   }
}
