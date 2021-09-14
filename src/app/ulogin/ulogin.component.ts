import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {

  uname:string='';
  pwd:string='';
  users=[
    {"uname":"Priyanka","pwd":"priya@99"},
    {"uname":"Radhika","pwd":"radhika@12"},
    {"uname":"Muskaan","pwd":"muskaan@30"},
    {"uname":"Manish","pwd":"manish@98"},
    {"uname":"Deepak","pwd":"deepak@05"}
  ];
  validateUser(){
    if(this.users.find(x=>x.uname==this.uname && x.pwd==this.pwd)){
      localStorage.setItem("uname",this.uname);
      this._router.navigate(['./userpage']);
    }
    else this.msg='Invalid Credentials!';
  }
  msg:string='';
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

}
