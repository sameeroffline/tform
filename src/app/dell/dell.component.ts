import { Component, OnInit } from '@angular/core';
import { Dell } from '../dell';

@Component({
  selector: 'app-dell',
  templateUrl: './dell.component.html',
  styleUrls: ['./dell.component.css']
})
export class DellComponent implements OnInit {

  powers = ['Male','Female','Others'];
  model = new Dell('','',this.powers[4], '','');

  newform(): void{
    this.model = new Dell('' , '' , '' , ''  , '');
  }
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
