import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUserUseCase } from '../../core/use-cases/get-user.usecase';
import { User } from '../../core/domain/entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private getUserUseCase: GetUserUseCase) {}

  getUser(id: string): Observable<User> {
    return this.getUserUseCase.execute(id);
  }
}
