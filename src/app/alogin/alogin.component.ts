import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {
  
  uname:string='';
  pwd:string='';
  validateUser(){
    if(this.uname=='Bhakta Priya V' && this.pwd=='Bhakti@99'){
      localStorage.setItem("uname",this.uname);
      this._router.navigate(['./adminpage']);
    }
    else this.msg='Invalid Credentials!';
  }
  msg:string='';

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

}
