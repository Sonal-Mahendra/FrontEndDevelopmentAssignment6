import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  title = '';
  name='';
  constructor() { }

  ngOnInit() {
   this.title = 'Hi my Assignment 6';
    this.name='Sonal Mahendra';
  }

}
