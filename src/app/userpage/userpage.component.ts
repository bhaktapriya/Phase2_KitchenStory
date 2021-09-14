import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  uname:any;
  msg1:string='';

  item?:any[];
  z:any={};
  msg:string='';
  validateUser(){
    this._router.navigate(['./payment']);
  }
  constructor(private _router:Router) {
    this.uname=localStorage.getItem("uname");
    this.msg1=`Hello ${this.uname}, Welcome to Kitchen Story...`;
    
    this.item = [{ "id": 1001, "iname": "Pesto Pasta", "price": 180 },
      { "id": 1002, "iname": "Farmhouse Pizza", "price": 200 },
      { "id": 1003, "iname": "Paneer Tikka", "price": 150 },
      { "id": 1004, "iname": "Gobi Manchurian", "price": 120 },
      { "id": 1005, "iname": "Schezwan Fried Rice", "price": 180 },
      { "id": 1006, "iname": "Hyderabadi Biryani", "price": 250 },
      { "id": 1007, "iname": "Veg Nuggets", "price": 120 },
      { "id": 1008, "iname": "Oreo Shake", "price": 100 },
      { "id": 1009, "iname": "Virgin Mojito", "price": 100 },
      { "id": 1010, "iname": "Mango Cheesecake", "price": 150 }
    ];
   }

   getitembyID(id:number){
     this.z=JSON.parse(JSON.stringify(this.item?.find(z=>z.id==id)));
     this.msg=`The chosen item is added to your cart!`;
   }

  ngOnInit(): void {
  }

}
