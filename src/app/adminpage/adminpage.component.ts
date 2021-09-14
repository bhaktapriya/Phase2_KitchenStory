import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  uname:any;
  msg1:string='';

  item?:any[];
  z:any={};
  msg?:string;
  constructor(){

    this.uname=localStorage.getItem("uname");
    this.msg1=`Hello ${this.uname}, Welcome to Admin Page...`;

    this.item=[
      {"id":1001,"iname":"Pesto Pasta","price":180},
      {"id":1002,"iname":"Farmhouse Pizza","price":200},
      {"id":1003,"iname":"Paneer Tikka","price":150},
      {"id":1004,"iname":"Gobi Manchurian","price":120},
      {"id":1005,"iname":"Schezwan Fried Rice","price":180},
      {"id":1006,"iname":"Hyderabadi Biryani","price":250},
      {"id":1007,"iname":"Veg Nuggets","price":120},
      {"id":1008,"iname":"Oreo Shake","price":100},
      {"id":1009,"iname":"Virgin Mojito","price":100},
      {"id":1010,"iname":"Mango Cheesecake","price":150}
    ];
    this.msg=`Count of Food Items: ${this.item?.length}`;
  }

  getitembyID(id:number){
    this.z=JSON.parse(JSON.stringify(this.item?.find(z=>z.id==id)));
  }

  additem(){
    this.item?.push(this.z);
    this.msg=`Count of Food Items: ${this.item?.length}`;
  }

  deleteitembyID(ID:number){
    var i=Number(this.item?.findIndex(z=>z.id==ID));
    this.item?.splice(i,1);
    this.msg=`Count of Food Items: ${this.item?.length}`;
  }

  edititembyID(ID:number){
    var i=Number(this.item?.findIndex(z=>z.id==ID));
    this.item?.splice(i,1,this.z);
  }
 ngOnInit(): void {
  }
}
