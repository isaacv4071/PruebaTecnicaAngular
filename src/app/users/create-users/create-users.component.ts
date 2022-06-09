import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestCreate } from 'src/app/interfaces/users.type';
import { FormControl } from "@angular/forms";
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
    private userService: UsersService
  ) { }

  requestCreate: RequestCreate;

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  email = new FormControl("");
  first_name = new FormControl("");
  last_name = new FormControl("");

  submittedForm() {
    if (this.email.value != "" && this.first_name.value != "" && this.last_name.value != "") {
      this.requestCreate = { first_name: this.first_name.value, last_name: this.last_name.value, email: this.email.value };
      this.userService.createUser(this.requestCreate);
    }
    if (this.email.value == "" || this.first_name.value == "" || this.last_name.value == "") {
      alert("Todos los campos son obligatorios");
    }
  }
}
