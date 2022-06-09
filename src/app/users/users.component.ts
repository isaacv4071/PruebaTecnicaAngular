import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ResponseUsers } from '../interfaces/users.type';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../home/dashboard/dashboard.component.scss']
})
export class UsersComponent implements OnInit {

  responseUsers: ResponseUsers[];

  constructor(
    private userService:UsersService, 
    public dialog: MatDialog,) { }

  displayedColumns: string[] = ['name', 'email', 'actions'];

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(res => this.responseUsers = res);
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  openDialogAdd(): void {
    this.dialog.open(CreateUsersComponent, {});
  }

  DialogDelete(id: string): void {
    if (confirm("¿Está seguro de eliminar este usuario?")) {
      this.userService.deleteUser(id);
    }
  }

  openDialogEdit(id: string): void {
    const dialogRef = this.dialog.open(UpdateUsersComponent, {});
    this.userService.setId(id);
  }
  
  page_size: number = 5;
  page_number: number = 1;
}
