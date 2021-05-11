import { Component, OnInit } from '@angular/core';
import { postLoc } from '../profile/post.model';

@Component({
  selector: 'app-addlocform',
  templateUrl: './addlocform.component.html',
  styleUrls: ['./addlocform.component.css']
})
export class AddlocformComponent implements OnInit {

  postLoc = new postLoc();
  dataarray=[];

  constructor() { }

  ngOnInit(){
    this.postLoc= new postLoc;
    this.dataarray.push(this.postLoc);
  }

  addForm(){
    this.postLoc= new postLoc;
    this.dataarray.push(this.postLoc);
  }

  onsubmit(){
    console.log(this.dataarray);
  }
}
