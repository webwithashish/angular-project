import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      console.log('Login Form Submitted:', loginForm.value);
      // Add your authentication logic here
    }
  }
}
