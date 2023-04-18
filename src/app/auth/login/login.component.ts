import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/products']);
      console.log('correct');
    } else {
      alert('Invalid username or password.');
    }
  }
}
