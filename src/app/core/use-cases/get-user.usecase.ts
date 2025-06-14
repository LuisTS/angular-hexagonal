import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/entities/user.entity';
import { USER_REPOSITORY } from '../domain/repositories/user.repository';

@Injectable({ providedIn: 'root' })
export class GetUserUseCase {
  private userRepository = inject(USER_REPOSITORY);

  execute(id: string): Observable<User> {
    return this.userRepository.getUserById(id);
  }
}
