import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestUpdate } from 'src/app/interfaces/users.type';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.scss']
})
export class UpdateUsersComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UpdateUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string, private userService: UsersService) { }

  requestUpdate : RequestUpdate;

  ngOnInit(): void {
    this.updateForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  email = new FormControl("");
  first_name = new FormControl("");
  last_name = new FormControl("");

  updateForm(){
    this.userService.getUser(this.userService.getId()).subscribe((data) => {
      this.email.setValue(data['email']);
      this.first_name.setValue(data['first_name']);
      this.last_name.setValue(data['last_name']);
    });
  }

  submittedForm() {
    if (this.email.value != "" && this.first_name.value != "" && this.last_name.value != "") {
      this.requestUpdate = { first_name: this.first_name.value, last_name: this.last_name.value, email: this.email.value };
      this.userService.updateUser(this.userService.getId() , this.requestUpdate);
    }
    if (this.email.value == "" || this.first_name.value == "" || this.last_name.value == "") {
      alert("Todos los campos son obligatorios");
    }
  }

}
