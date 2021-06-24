import { Component, Input } from "@angular/core";
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

  data: any;
  servicedata:any;
  postLoc = new postLoc();
  postLocArray=[];
  activeindex=-1;
  title='Submit';


  // posts = [
  //   {City: 'Ankara', Country: 'Turkey', Winter: '1', Water: '2', Culture: '2', Nature: '2', Entertainment: '2', Camping: '2', Cruise: '2'},
  //   {City: 'Istanbul', Country: 'Turkey', Winter: '1', Water: '2', Culture: '2', Nature: '2', Entertainment: '2', Camping: '2', Cruise: '2'}
  // ];


  @Input() posts = [ ];


  // postLoc = new postLoc();

  // dataarray = [];

  // newCity = '';

  // data:any;
  // servicedata:any;


  // ngOnIt(){
  //   this.dataarray.push(this.postLoc);
  // }

  // addForm(){
  //   this.postLoc= new postLoc();
  //   this.dataarray.push(this.postLoc);
  // }

  // onAddPost(postInput: HTMLTextAreaElement){
  //   this.newCity ='';

  // }
}
