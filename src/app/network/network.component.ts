import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {


  users =[];
  searchStr ='';

  constructor(private usersService: UsersService){
  }

  ngOnInit(){
    this.usersService.getUsers().subscribe(users => this.users = users);
  }



}
