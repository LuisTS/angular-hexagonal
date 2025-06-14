import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../application/services/user.service';
import { User } from '../core/domain/entities/user.entity';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  `
})
export class UserComponent implements OnInit {
  user?: User;
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUser('1').subscribe(user => {
      this.user = user;
    });
  }
}
