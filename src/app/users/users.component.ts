import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ResponseUsers } from '../interfaces/users.type';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../home/dashboard/dashboard.component.scss']
})
export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers[];

  constructor(private userService:UsersService) { }

  displayedColumns: string[] = ['name', 'email', 'actions'];

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(res => this.responseUsers = res);
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
  
  page_size: number = 5;
  page_number: number = 1;
}
