import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  private data;
  constructor(private http: Http) {
    
  }

  ngOnInit() :void{
    this.http.get("assets/usersMockData.json")
    .subscribe((data)=> {
        setTimeout(()=> {
            this.data = data.json();
        }, 1000);
    });
  }

}
