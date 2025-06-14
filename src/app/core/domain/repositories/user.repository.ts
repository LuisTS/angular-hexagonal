import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

export interface UserRepository {
  getUserById(id: string): Observable<User>;
}

// El token
export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserRepository');
