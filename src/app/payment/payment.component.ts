import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  validateUser(){
    this._router.navigate(['./payinitiated']);
  }
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

}
