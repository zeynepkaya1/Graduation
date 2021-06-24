import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile';
import { AddlocformComponent } from '../addlocform/addlocform.component';

@Component({
  selector: 'app-profile-total',
  templateUrl: './profile-total.component.html',
  styleUrls: ['./profile-total.component.css']
})
export class ProfileTotalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  storedPosts = [];

  onsubmit(post: any) {
    this.storedPosts.push(post);
  }
}
