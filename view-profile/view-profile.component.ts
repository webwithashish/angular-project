import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-view-profile',
  standalone: false,
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {
  isEditMode = false;
  profileImage = 'https://randomuser.me/api/portraits/men/32.jpg';

  // User data
  user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    dob: '1990-05-15', // Date of Birth
    contact: '9876543210',
    address: '123 Main St, New York',
    password: '',
    confirmPassword: ''
  };

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      // Reset password fields when exiting edit mode
      this.user.password = '';
      this.user.confirmPassword = '';
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.user.password && this.user.password !== this.user.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      // Here you would call your service to update the user
      console.log('Updated user data:', {
        contact: this.user.contact,
        address: this.user.address,
        ...(this.user.password && { password: this.user.password })
      });

      this.isEditMode = false;
      this.user.password = '';
      this.user.confirmPassword = '';
    }
  }

}
