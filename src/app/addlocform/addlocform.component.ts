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

  city: any;
  country:any;
  winter:any;
  water:any;
  culture:any;
  nature:any;
  entertainment:any;
  camping:any;
  cruise:any;
  obj:any;
  constructor() { }

  ngOnInit(){
    this.postLoc= new postLoc;
  }

  addForm(){
    this.postLoc= new postLoc;
  }

  onsubmit(){
    this.obj={
  city:this.city,
  country:this.country,
  winter:this.winter,
  water:this.water,
  culture:this.culture,
  nature:this.nature,
  entertainment:this.entertainment,
  camping:this.culture,
  cruise:this.cruise
    }
    console.log(this.obj)
  }
}
