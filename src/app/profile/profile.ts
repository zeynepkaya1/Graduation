import { Component } from "@angular/core";
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { postLoc } from './post.model';


const material = [
  MatSelectModule,
  MatFormField
];


@Component({
  selector: 'profile-component',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent{

  postLoc = new postLoc();

  dataarray = [];

  newCity = '';


  // ngOnIt(){
  //   this.dataarray.push();
  // }

  onAddPost(postInput: HTMLTextAreaElement){
    this.newCity ='';

  }
}
