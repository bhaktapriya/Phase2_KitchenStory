import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Eid?:string;
  Name?:string;
  phonenumber?:number;
  pwd:string='';
  validateUser(){
    
    this._router.navigate(['./userpage']);
  }
  msg:string='';
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

}
