import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from './repository.model';
import { User } from './user.model';
import { UserFormControl, UserFromGroup } from './form.model';

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class UserManage {
  title = "Address book updated";
  model = new Model();
  newUser: User = new User();
  formGroup : UserFromGroup = new UserFromGroup();

  getUsers() {
    return this.model.getusers();
  }

  formSubmitted: boolean = false;
  submitForm() {
    Object.keys(this.formGroup.controls).forEach( c  => this.newUser[c as keyof Object] = this.formGroup.controls[c].value);
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      this.addUser(this.newUser);
      this.newUser = new User();
      this.formGroup.reset();
      this.formSubmitted = false;
    }
  }
  addUser(newUser: User) {
    // throw new Error('Method not implemented.');
    console.log("New Product: " + this.jsonProduct);
  }
  get jsonProduct() {
    return JSON.stringify(this.newUser);
    }
}