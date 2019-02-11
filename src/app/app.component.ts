import { Component } from '@angular/core';
import { UsersService } from './users.service';
import {style} from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {

  visibility = true;

  onClick() {
    this.visibility = !this.visibility;
  }

  onClickWindow(){

  }

}

//https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb
